import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'



function App() {

  let arr = [1, 2, 3]
  let myObj = { userName: "musawer", age: 24 }
  return (
    <>
      <h1 className='bg-black text-white font-medium text-5xl text-center p-4 rounded-2xl'>Hi I am Musawer</h1>
      {/* <ProfileCard url="https://i.pravatar.cc/150?img=12" username="john doe" array=[1,2,3] obj = {name: "musawer"}/> cannot directly pass array or object */}
      <ProfileCard url="https://i.pravatar.cc/150?img=12" username="john doe" array={arr} />  {/*must pass it as variable*/}
      <ProfileCard url="https://i.pravatar.cc/150?img=12" username="Tahir Rajput" obj={myObj} /> {/*same, passed it as variable*/}
      {/* <ProfileCard  /> */}
    </>
  )
}

export default App
