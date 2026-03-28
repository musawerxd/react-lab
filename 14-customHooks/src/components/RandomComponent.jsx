import React from 'react'
import CustomHook from '../hooks/customHook'
function RandomComponent() {
    let data = CustomHook("https://jsonplaceholder.typicode.com/users");
    return (
        <div>
            <h1>Hi</h1>
            <h2>Data: {JSON.stringify(data)}</h2>
        </div>
    )
}

export default RandomComponent
