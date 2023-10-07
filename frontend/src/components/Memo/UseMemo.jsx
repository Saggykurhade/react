import React, { useState, useEffect, useMemo } from 'react'

const UseMemo = () => {

    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([]);

    function addTodo() {
        setTodos([...todos, "New todo"])
    }

    // const lengthyCalculation = calculate(counter);

    const lengthyCalculation = useMemo(() => calculate(counter), [counter]);

    return (
        <div>
            <h1>lengthy Calculation - {lengthyCalculation}</h1>
            <h1>counter - {counter}</h1>
            <button onClick={() => setCounter((value) => value + 1)}>+</button>
            <button onClick={addTodo}>Add todo</button>
            {todos.map((todo) => (
                <div>{todo}</div>
            ))}
        </div>
    )
}

const calculate = (counter) => {
    console.log("calculatinng...")
    for (let i = 0; i < 1000000000; i++) {
        counter += 1
    }
    return counter;
}

export default UseMemo