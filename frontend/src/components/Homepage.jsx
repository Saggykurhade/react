import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from "react";
// import { MyContext } from "./Context/GlobalContext";
import { AuthContext } from "./Context/AuthContext";

function Homepage() {

    // const {state, dispatch} = useContext(MyContext);
    const { state, Logout } = useContext(AuthContext)
    // console.log(state, "state")

    const router = useNavigate()

    function routerToLogin() {
        router('/login');
    }

    // function routerToRegister2() {
    //     router('/Register2');
    // }

    function routerToRegister() {
        router('/register');
    }


    // function routerToCounter() {
    //     router('/Counter');
    // }

    // function PageFound() {
    //     router('/PageFound');
    // }

    return (
        <div>
            <h1>This is Awdiz</h1>
            {/* <h1>Counter: {state.counter}</h1> */}
            <h1>User : {state?.user?.name}</h1>
            {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button> */}
            <button onClick={routerToLogin}>Go to Login</button>
            {/* <button onClick={routerToRegister2}>Go to Register2</button> */}
            <button onClick={routerToRegister}>Go to Register</button>
            {/* <button onClick={routerToCounter}>Go to Counter</button> */}
            <button onClick={() => toast.error("Clickedd")}>Click for toast error</button>
            {/* <button onClick={() => toast.success("Clickedd")}>Click for toast success</button> */}
            <button onClick={() => toast.success("Clickedd")}>Click for toast success</button><br />
            <button onClick={Logout}>Logout ?</button>
        </div>
    )
}

export default Homepage;