import React, { useEffect, useState } from "react";

const Effect3 = () => {

    const [Counter, setCounter] = useState(0);

    useEffect (() => {
        alert("Rendered..? on initial render and when counter changes")
    }, [Counter]); //dependencies

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+</button>
        </div>
    )
}

export default Effect3