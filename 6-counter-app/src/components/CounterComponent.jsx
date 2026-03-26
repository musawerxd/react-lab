

import { useState } from "react";

function CounterComponent() {

    let [count, setCount] = useState(0)

    function increase() {
        setCount((prev) => prev < 22 ? prev + 1 : prev)

    }
    function decrease() {
        setCount((prev) => prev > 0 ? prev - 1 : prev)

    }
    function reset() {
        setCount(0)
    }

    return (
        <>
            <div className="mainContainer">
                <h1>Counter</h1>
                <span>It will count from 0 to 22 only!</span>

                <div className="buttons">
                    <button
                        onClick={increase}
                    >Click to increase {count}</button>
                    <button
                        onClick={decrease}
                    >Click to decrease {count}</button>
                </div>
                <button
                    onClick={reset}
                >Click to Reset </button>
            </div >

        </>
    )
}

export default CounterComponent;