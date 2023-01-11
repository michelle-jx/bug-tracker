import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Auth from "./Auth"
import Forgot from "./Forgot"
import Dashboard from "./Dashboard"
import TicketList from "./TicketList"
import { useState, useEffect } from "react"

function App() {
  const [user, setUser] = useState({})

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
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/auth" />} />
        <Route path="/auth" element={<Auth onLogin={onLogin} />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/dashboard" element={<Dashboard user={user} handleLogout={handleLogout}/>} /> 
        {/* reroute to auth when user empty */}
        <Route path="/tickets" element={<TicketList />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App