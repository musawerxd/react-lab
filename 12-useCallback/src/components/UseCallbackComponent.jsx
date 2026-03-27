import React from 'react'
import { useEffect, memo } from 'react'


function UseCallbackComponent({ value, getValue }) {

    useEffect(() => {
        console.log("useCallback Component Re-rendering...")
    })

    return (
        <div>
            <h1>Hi, I am {value} useCallback Component</h1>
        </div>
    )
}

export default memo(UseCallbackComponent) // memo makes sure the component is not being re redered due to others 
// refers to React.memo, a higher-order component (HOC) used for performance optimization. It prevents a functional component from re-rendering if its props have not changed, by memoizing (caching) the result of the last render.


// actually memo: If props are SAME as last render → SKIP re-render