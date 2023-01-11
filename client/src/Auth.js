
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Auth ({ onLogin }) {
  let [authMode, setAuthMode] = useState("signin")
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleLogin(e) {
    e.preventDefault();

    const userObj = {
      username: username,
      password: password
    }
  
    const configObj = {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(userObj)
    }
    fetch("/auth", configObj)
      .then(r => {
        if (r.ok) {
          r.json().then((user) => onLogin(user))
          navigate("/dashboard")
        } //create ELSE statement for ig login doesn't exist?? probably need a validation for this
      })
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
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newUserObj)
    }
    handleLogin(e)
  }


  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="username"
                value={username}
                onChange={handleChangeUsername}
                className="form-control mt-1"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={handleChangePassword}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <Link to="/forgot">password?</Link>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleCreateUser}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
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
export default Auth;