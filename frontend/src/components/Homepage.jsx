import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from "react";
import { MyContext } from "./Context/GlobalContext";

function Homepage () {

    const {state, dispatch} = useContext(MyContext);

    const router = useNavigate()

    function routerToLogin() {
        router('/Login');
    }

    function routerToRegister() {
        router('/Register');
    }

    
    function routerToCounter() {
        router('/Counter');
    }

    function PageFound() {
        router('/PageFound');
    }
    
    return (
        <div>
            <h1>This is Awdiz</h1>
            <h1>Counter: {state.counter}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={routerToRegister}>Go to Register</button>
            <button onClick={routerToCounter}>Go to Counter</button>
            <button onClick={() => toast.error("Clickedd")}>Click for toast error</button>
            <button onClick={() => toast.success("Clickedd")}>Click for toast success</button>
        </div>
    )
}

export default Homepage;