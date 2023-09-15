import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const router = useNavigate()

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+ counter</button>
            <button onClick={() => setCounter((rahul) => rahul - 1)} >- Counter</button>
            <button onClick={() => setCounter((prevValue) => prevValue + 10)}>+10 counter</button>
            <br />
            <button onClick={() => router('/')}>Homepage</button>
        </div>
    )
}


export default Counter;