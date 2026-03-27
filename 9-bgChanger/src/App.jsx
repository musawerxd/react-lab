import { useState } from 'react'

import './App.css'

function App() {

  let [bg, setBg] = useState("#212121")

  return (
    <>
      <div className='h-screen flex items-end justify-center duration-1000 ease-in-out' style={{ backgroundColor: bg }}>

        <div className=" bg-white p-3 rounded-full flex flex-wrap gap-0.5">
          <button onClick={() => setBg("red")} className='text-white bg-red-500 py-2 px-7 rounded-full hover:cursor-pointer'>Red</button>
          <button onClick={() => setBg("green")} className='text-white bg-green-500 py-2 px-7 rounded-full hover:cursor-pointer'>Green</button>
          <button onClick={() => setBg("yellow")} className='text-white bg-yellow-500 py-2 px-7 rounded-full hover:cursor-pointer'>yellow</button>
          <button onClick={() => setBg("orange")} className='text-white bg-orange-500 py-2 px-7 rounded-full hover:cursor-pointer'>Orange</button>
          <button onClick={() => setBg("blue")} className='text-white bg-blue-500 py-2 px-7 rounded-full hover:cursor-pointer'>Blue</button>
          <button onClick={() => setBg("black")} className='text-white bg-black py-2 px-7 rounded-full hover:cursor-pointer'>Black</button>
          <button onClick={() => setBg("pink")} className='text-white bg-pink-500 py-2 px-7 rounded-full hover:cursor-pointer'>Pink</button>
          <button onClick={() => setBg("white")} className='text-black border bg-white py-2 px-7 rounded-full hover:cursor-pointer'>White</button>
          <button onClick={() => setBg("gray")} className='text-white bg-gray-500 py-2 px-7 rounded-full hover:cursor-pointer'>Gray</button>
        </div>
      </div>
    </>
  )
}

export default App
