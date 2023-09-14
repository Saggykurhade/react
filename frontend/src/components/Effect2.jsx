import React, { useEffect, useState } from 'react'

const Effect2 = () => {

    const [Counter, setCounter] = useState(0)

    useEffect(() => {
        alert("Rendered 2nd type, it'll execute the code only on first render of component.")
    }, [])

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((preValue) => preValue + 1)}>+</button>
        </div>
    )
}

export default Effect2;