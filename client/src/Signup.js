import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup({ onLogin }) {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleCreateUser(e) {
        e.preventDefault()

        const newUserObj = {
            name: name,
            username: username,
            password: password
        }

        const configObj = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newUserObj)
        }
        fetch("/signup", configObj)
            .then(r => {
                if (r.ok) {
                    r.json().then((user) => {
                        onLogin(user)
                        navigate("/dashboard")
                    })
                } else {
                    alert("Please fill out the form completely. Account was not successfully created.")
                }
            })
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleCreateUser}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary">
                        <Link to="/login">Sign In</Link>
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="name"
                            value={name}
                            onChange={handleChangeName}
                            className="form-control mt-1"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="username"
                            value={username}
                            onChange={handleChangeUsername}
                            className="form-control mt-1"
                            placeholder="Username"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handleChangePassword}
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Signup