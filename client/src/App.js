import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Forgot from "./Forgot"
import { useState, useEffect } from "react"

function App() {
  const [user, setUser] = useState("")

  useEffect(() => {
    fetch("/me")
    .then(r => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth setUser={setUser}/>} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App