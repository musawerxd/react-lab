import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'


function FnInMain() {
  return (

    <h2>I am doing CS from UAF</h2>

  )
}
// function FnInMain() {   //2
//   return <h2>I am doing CS from UAF</h2>
// }

const elementInMain = (
  <a href="google.com" target='_blank'> Google </a>
)

const username = " global Username"

const anotherelementInMain = React.createElement("a", { href: "https://www.facebook.com/", target: "_blank" }, "this is made using React.createElement, click to facebook", username)

createRoot(document.getElementById('root')).render(

  // <>
  //   <App />
  //   <FnInMain />
  // </>

  // FnInMain()

  // <FnInMain />  //2

  // elementInMain

  // anotherelementInMain

  <>
    <App />
    <FnInMain />
  </>
)
