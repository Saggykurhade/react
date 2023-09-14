// const Register = () => {}    or 
import { useNavigate } from "react-router-dom";

function Homepage () {

    const router = useNavigate();

    function routerToLogin() {
        router('/Login')
    }
    
    return (
        <div>
            <h1>This is Awdiz</h1>
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={() => router('/register')}>Go to Register</button>
        </div>
    )
}

export default Homepage;