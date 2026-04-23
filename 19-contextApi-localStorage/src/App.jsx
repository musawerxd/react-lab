import { useState } from 'react'
import './App.css'
// import Todo from './components/Todo/Todo'
import Header from './components/Header/Header'

import { TodoContextProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoForm'

import { useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev])
  }


  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => 
        prevtodo.id === id ? { ...prevtodo, todo: todo } : prevtodo
      )
    )
  }


  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((prevtodo) => prevtodo.id !== id)
    )
  }



  const ToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map(prevtodo => {
        prevtodo.id === id ? {
          ...prevtodo, completed: !prevtodo.completed
        } : prevtodo
      })
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoContextProvider value={todos, addTodo, updateTodo, deleteTodo, ToggleComplete}>
      <Header />
      <div className="bg-[#212121] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map(() => (
              <div key={todo.id}
                className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
