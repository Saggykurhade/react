import React, { useEffect, useState } from 'react'

const Effect1 = () => {
    consrt[Counter, setCounter] = useState(0)

    useEffect(() => {
        alert("Rendered..it'll execute the function on every render and render causes bcoz of first render, reload and state change")
    })

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((preValue) => preValue + 1)}>+</button>
        </div>
    )
}

export default Effect1;