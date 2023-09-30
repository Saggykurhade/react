import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

function Homepage () {

    const router = useNavigate()

    function routerToLogin() {
        router('/Login');
    }

    function routerToRegister() {
        router('/Register');
    }

    
    function routerToCounter() {
        router('/CoUnter');
    }

    function PageFound() {
        router('/PageFound');
    }
    
    return (
        <div>
            <h1>This is Awdiz</h1>
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={routerToRegister}>Go to Register</button>
            <button onClick={routerToCounter}>Go to Counter</button>
            <button onClick={() => toast.error("Clickedd")}>Click for toast error</button>
            <button onClick={() => toast.success("Clickedd")}>Click for toast success</button>
        </div>
    )
}

export default Homepage;