import React, {useState} from "react"
import swal from "sweetalert"
import APIURL from "../helpers/environment"

//Login
const Login = props => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(true)
    
    const title = () => {
        return !login ? "Sign Up" : "Welcome Back!"
    }

    const loginToggle = (e) => {
        e.preventDefault()

        setLogin(!login)

        setUsername("")
        setEmail("")
        setPassword("")

    }
//Sign Up
    const signupFields = () => !login ?
    (
        <div>
            <br />
            <input required minlength="4" placeholder="username" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br />
        </div>
    ) : null

    const handleSubmit = (event) => {
        event.preventDefault()

        let reqBody = login ?
            {
                email:email,
                password: password
            } : {
                username: username,
                email: email,
                password: password
            }

        let url = login ?
            `${APIURL}/user/login` :
            `${APIURL}/user/register`

        fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
        .then(response => response.json())
        .then(json => {
            if(json.message !== "User successfully logged in!" && json.message !== "User successfully registered"){
                swal({title: json.message, icon: "error"})
            }
            props.updateLocalStorage(json.token)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <br />
            <form className="login-container" onSubmit={(event) => {handleSubmit(event)}}>
                <h1>{title()}</h1>
                {signupFields()}
                <br />
                <input placeholder="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <br />
                <input minlength="5"placeholder="password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <br />
                <button className="button login-button" type="submit"><b>Submit</b></button>
                <br />
                <br />
                <button className="button login-button" onClick={loginToggle}><b>{
                    login ? "Sign Up" : "Login"
                }</b></button>
            </form>
        </div>
    )
}

export default Login