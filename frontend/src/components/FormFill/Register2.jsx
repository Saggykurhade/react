import { useNavigate } from "react-router-dom";

function Register2 () {

    const router = useNavigate();

    // function routerToHomepage(){
    //     router('/')
    // }

    return (
        <div>
          <h1>Register2</h1>
          {/* <form onSubmit={sendDataToBackend}>
                <label>Name :</label><br />
                <input name='name' type='text' onChange={handleChange} /> <br />
                <label>Email :</label><br />
                <input name='email' type='email' onChange={handleChange} /> <br />
                <label>Password :</label><br />
                <input name='password' type='password' onChange={handleChange} /> <br />
                <input type='submit' value="Register here" /> <br />
            </form> */}
          <button onClick={() => router('/')}>Go to Homepage</button>
        </div>
    )
}

export default Register2;