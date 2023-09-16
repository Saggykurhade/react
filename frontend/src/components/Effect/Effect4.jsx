import React, { useEffect, useState} from "react";

const Effect4 = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect (() => {
        alert("Rendered..? on initial render and when counter 1 changes and counter 2 changes")
    }, [counter1, counter2]); //multiple dependencies

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => setCounter1((prevValue) => prevValue +1)}>+</button>
            <h1>Counter</h1>
            <button onClick={() => setCounter2((prevValue) => prevValue + 1)}>+</button>
        </div>
    )

}

export default Effect4;