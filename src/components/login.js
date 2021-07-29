import React, {useState} from "react"

//Login
const Login = props => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(true)
    
    const title = () => {
        return !login ? "Signup" : "Login"
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
            <label>Username:</label>
            <br />
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br />
        </div>
    ) : null

    const handleSubmit = event => {
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
            "http://localhost:4000/user/login" :
            "http://localhost:4000/user/register"

        fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
        .then(response => response.json())
        .then(json => props.updateLocalStorage(json.token))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <br />
            <form className="login-container">
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor="email"><b>Email:</b></label>
                <br />
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <br />
                <label htmlFor="password"><b>Password:</b></label>
                <br />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button type="submit" onClick={handleSubmit}><b>Submit</b></button>
                <br />
                <br />
                <button onClick={loginToggle}><b>Login | Sign Up</b></button>
            </form>
        </div>
    )
}

export default Login