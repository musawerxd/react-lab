import { useState } from 'react'
import './App.css'





function App() {
  let username = "Musawer" // variable injection 
  return (
    <>
      <h1>Hi, I am {username} </h1>
    </>
    // this is evaluated expression, means it displays final evalued outcome , we can perform operationslike (+ , - , * etc , ternaary, boolean ) but cannnot perform if, for, while , as they are NOT allowed
  )
}

export default App
