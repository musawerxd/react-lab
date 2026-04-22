
import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "start nextJs",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    ToggleComplete: (id) => { },
});

export const TodoContextProvider = TodoContext.Provider;


const useTodo = () => {
    return useContext(TodoContext)
}

export default useTodo;