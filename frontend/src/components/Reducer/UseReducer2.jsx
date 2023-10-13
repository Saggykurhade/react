import React, { useReducer } from 'react';
const initialState = { count: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, count: state.count + 1 }
        case "SUBTRACT":
            return { ...state, count: state.count - 1 }
        case "RESET":
            return { ...state, count: 0 }
        default:
            return state
    }
}

const UseReducer2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function AddCounter () {
        dispatch({type : "ADD"})
    }

    function SubtractCounter () {
        dispatch({type : "SUBTRACT"})
    }
    function ResetCounter () {
        dispatch({type : "RESET"})
    }
    return (
        <div>
            <h1>counter : {state.count}</h1>
            <button onClick={AddCounter}>+</button>
            <button onClick={SubtractCounter}>-</button>
            <button onClick={ResetCounter}>Reset</button>
        </div>
    )
}

export default UseReducer2