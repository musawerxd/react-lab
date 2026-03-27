import React from 'react'
import "./App.css"
import UseCallbackComponent from './components/UseCallbackComponent'
import { useEffect, useCallback, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log("clicked")
  }

  // let getValue = () => {
  //   return "bad boy"
  // }
  // without callback the function will be declared and defined again again in each rendering 

  let getValue = useCallback(() => {
    return "bad boy"
  }, [])
  //  callback It memoizes the function reference.


  return (
    <div>
      <button onClick={() => {
        handleClick()
        setCount(count + 1)
      }}>Click me to Update : {count}</button>


      <UseCallbackComponent value="good Boy" getValue={getValue} />
    </div>
  )
}


export default App
