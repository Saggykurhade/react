import { useNavigate } from "react-router-dom";

function Register () {

    const router = useNavigate();

    function routerToHomepage(){
        router('/')
    }

    return (
        <div>
          <h1>Register</h1>
          <button onClick={() => router('/')}>Go to Homepage</button>
        </div>
    )
}

export default Register;