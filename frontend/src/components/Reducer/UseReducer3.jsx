import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            if (state.count > 0) {
                return { ...state, count: state.count - 1 };
            }
        case "MULTIPLY":
            if (state.count) {
                return { ...state, count: state.count * 2 }
            }
        case "RESET":
            return { ...state, count: 0 };
        default:
            return state;
    }
}


const UseReducer3 = () => {

    const initialState = { count: 0 };

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const decrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    const multiply = () => {
        dispatch({ type: 'MULTIPLY' })
    }

    const reset = () => {
        dispatch({ type: 'RESET' })
    }

    return (
        <div>
            <h2>count: {state.count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default UseReducer3