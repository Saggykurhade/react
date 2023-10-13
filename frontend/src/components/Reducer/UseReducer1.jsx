import React, { useReducer } from 'react';
 const initialState = { count: 0 }
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 }
    case "SUBTRACT":
      if(state.count > 0) {
        return { ...state, count: state.count - 1 }
      }
      case "MULTIPLY":
        if(state.count) {
          return {...state, count: state.count * 2}
        }
        case "DIVIDE":
          if(state.count > 0) {
            return {...state, count: state.count / 2}
          }
    case "RESET":
      return { ...state, count: 0 }
    default:
      return state
  }
}

const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  function AddCounter() {
    dispatch({ type: "ADD" })
  }

  function SubtractCounter() {
    dispatch({ type: "SUBTRACT" })
  }

  function MultiplyCounter() {
    dispatch({ type: "MULTIPLY" })
  }
  
  function DivideCounter() {
    dispatch({ type: "DIVIDE" })
  }

  function ResetCounter() {
    dispatch({ type: "RESET" })
  }
  return (
    <div>
      <h1>counter : {state.count}</h1>
      <button onClick={AddCounter}>+</button>
      <button onClick={SubtractCounter}>-</button>
      <button onClick={ResetCounter}>Reset</button>
      <button onClick={MultiplyCounter}>Multiply</button>
      <button onClick={DivideCounter}>Divide</button>
    </div>
  )
}

export default UseReducer1