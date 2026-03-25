




// useState = a Hook that gives your component memory + re-render ability

// Simple:
// “Store a value and update UI when it changes”
//syntax
// const [state, setState] = useState(initialState)


import { useState } from "react"

function UseStateComponent() {

    // let count = 0
    let [count, setCount] = useState(0)
    return (
        <>
            <h1>Using useState</h1>
            <button onClick={() => setCount(count + 1)}>Click me to update : {count}</button><br /><br />
            <button onClick={() => setCount(0)}>Click me to to reset</button>
            <br /><br /><br /><hr />
        </>
    )

}

export default UseStateComponent;




// If your app has:

// 👉 user input
// 👉 UI changes
// 👉 dynamic data

// 👉 YOU NEED useState