import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Forgot from "./Forgot"
import Dashboard from "./Dashboard"
import TicketList from "./TicketList"
// import { Context } from "./contexts/Context"
import { useState, useEffect } from "react"
import ProjectItem from './ProjectItem'

function App() {
  const [user, setUser] = useState({})
  // const {user, setUser} = useContext(Context)

  useEffect(() => {
    fetch("/me")
      .then(r => {
        if (r.ok) {
          r.json().then((user) => {
            console.log(user)
            setUser(user)
          })
        }
      })
  }, [])

  function onLogin(user) {
    setUser(user)
  }

  function handleLogout() {
    setUser({})
    // redirect("/login")
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/signup" element={<Signup onLogin={onLogin}/>}/>
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/dashboard" element={<Dashboard user={user} handleLogout={handleLogout}/>} /> 
        <Route path="/tickets" element={<TicketList />}/>
        <Route path="/projects/${id}" element={<ProjectItem />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App