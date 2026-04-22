import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

import { useContext } from 'react'
import UserContext from './context/UserContext.js'


function App() {
  const { user } = useContext(UserContext)

  return (
    <>
      {!user ? <Login /> : <Dashboard />}
    </>
  )
}

export default App
