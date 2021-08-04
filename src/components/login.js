import React, {useState} from "react"

//Login
const Login = props => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(true)
    
    const title = () => {
        return !login ? "Signup" : "Welcome Back!"
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
            <input placeholder="username" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
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
        .then(json => {
            alert(json.message)
            props.updateLocalStorage(json.token)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <br />
            <form className="login-container">
                <h1>{title()}</h1>
                {signupFields()}
                <br />
                <input placeholder="email" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <br />
                <input placeholder="password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button className="button login-button" type="submit" onClick={handleSubmit}><b>Submit</b></button>
                <br />
                <br />
                <button className="button login-button" onClick={loginToggle}><b>Login | Sign Up</b></button>
            </form>
        </div>
    )
}

export default Login