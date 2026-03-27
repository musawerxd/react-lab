import { useState, useEffect } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0)


  // let a = 0;
  // useEffect(() => {
  //   a = a + 1;
  //   console.log(`re-rendering... and the value of a is : ${a}`)
  //   //each time when value of useState is chagned the whole component rerenders 
  //   // the value of a will remain 1 ,as the whole component is re rendering again 
  //   // so how do we use simple variable inside the component? 
  // })



  // so what do we do is that: we use useref hook
  let b = useRef(0)
  useEffect(() => {
    b.current = b.current + 1;
    console.log(`re-rendering... value of b is : ${b.current}`)
    btnRef_1.current.style.backgroundColor = "red"
    btnRef_1.current.style.color = "black"
    btnRef_1.current.style.borderColor = "black"
    sectionRef.current.style.backgroundColor = "yellow"
  }, [])
  //   Behavior	Meaning
  //    no array	run every render
  //   []	run once
  //   [deps]	run when deps change

  // IMPORTANT: when we use useref , the component is not re-rendered again 


  // let count = useRef(0)

  let btnRef_1 = useRef()

  let count2 = useRef(0)
  let sectionRef = useRef()

  return (
    <>
      <section ref={sectionRef} id="center">
        <button ref={btnRef_1} className="counter" onClick={() => setCount((count) => count + 1)}>Count is {count}</button>

        <button className="counter" onClick={() => { ++count2.current }}>Count is {count2.current}</button>
        {/* it will update the count2.current but will not show changes on the screen until the component is rerendered */}
      </section>

    </>
  )
}

export default App


// useRef is mainly used to access DOM elements directly and to store values that persist across renders without causing re-renders.

// A component can have:

// ✅ one useEffect
// ✅ multiple useEffects
// ❌ zero(if not needed)

// splits useEffect by purposes