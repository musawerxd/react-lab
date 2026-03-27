import { useState, useEffect } from 'react'




// In React terms:
// 👉 useEffect = “do something after React has updated the UI”

// Think: “Side effect manager” — anything that happens outside the component rendering, like API calls, timers, subscriptions, localStorage, etc.

//     useState = memory
//     useEffect = actions based on that memory


/* 
problem before useEffect:

function App() {
  const [data, setData] = useState([]);

  // ❌ This runs on EVERY render
  fetch("https://api.example.com/users")
    .then(res => res.json())
    .then(setData);

  return <div>{data.length}</div>;
}
  
*/



function UseEffectComponent() {
  let [data, setData] = useState([])
  let [loadStatus, setloadStatus] = useState("...Loading")  // just for tracking the useEfect loading 

  // useEffect runs after THIS component is rendered and committed to the DOM

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data)
        setData(data)
        setloadStatus("Loaded useEffect work") // just for tracking the useEfect loading 
      })
  }, [])


  return (
    <div>
      <h1>Using useEffect</h1>
      <h2>useEffect Status  : {loadStatus}</h2>
      <h2>length of users loaded: {data.length}</h2>
    </div>
  )


}

export default UseEffectComponent;
