import { useNavigate } from "react-router-dom";

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
    
    return (
        <div>
            <h1>This is Awdiz</h1>
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={routerToRegister}>Go to Register</button>
            <button onClick={routerToCounter}>Go to Counter</button>
        </div>
    )
}

export default Homepage;