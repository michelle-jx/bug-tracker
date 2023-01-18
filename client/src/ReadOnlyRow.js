import { Link } from "react-router-dom"
import { useState } from "react"

function ReadOnlyRow({ ticket, handleEditField, tickets, setTickets }) {
  const [rowView, setRowView] = useState(true)
  const [editFormData, setEditFormData] = useState({
    title: "",
    name: "",
    status: "",
    priority: "",
    issue: "",
    author: "",
    eta: ""
  })

  function toggleView(e) {
    e.preventDefault()
    console.log("toggling")
    setRowView(rowView => !rowView)
  }

  function handleEditTicket(e) {
    e.preventDefault()
    console.log("editing form")

    const fieldName = e.target.getAttribute('value')
    const fieldValue = e.target.value

    const editedFormData = { ...editFormData }
    editFormData[fieldName] = fieldValue
    setEditFormData(editedFormData)
  }

  function handleEditFormSubmit(e) {

    const updatedTicket = {
      title: editFormData.title,
      name: editFormData.name,
      status: editFormData.status,
      priority: editFormData.priority,
      issue: editFormData.issue,
      author: editFormData.author,
      eta: editFormData.eta
    }

    fetch("/dashboard", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedTicket)
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.ok) {
          resp.json().then() //do we need to set tickets again?
        }
      })
  }

  if (!rowView) {
    return (
      <form onSubmit={handleEditFormSubmit}>
        <input placeholder={ticket.project.title} name="title" onChange={handleEditTicket}/>
        <input placeholder={ticket.user.name} name="status" onChange={handleEditTicket}/>
        <input placeholder={ticket.priority} name="priority" onChange={handleEditTicket}/>
        <input placeholder={ticket.issue} name="issue" onChange={handleEditTicket}/>
        <input placeholder={ticket.author} name="author" onChange={handleEditTicket}/>
        <input placeholder={ticket.eta} name="eta" onChange={handleEditTicket}/>
        <button>Submit</button>
      </form>
    )
  } else {

    return (
      <tr class="table-light" className="table-row" onClick={toggleView}>
        <Link to="/projects/${id}" ticket={ticket}><td><b>{ticket.project.title}</b></td></Link>
        <td class="table-light">{ticket.user.name ? ticket.user.name : "TBD"}</td>
        <td class="table-light">{ticket.status ? ticket.status : "TBD"}</td>
        <td class="table-light">{ticket.priority}</td>
        <td class="table-light">{ticket.issue ? ticket.issue : "TBD"}</td>
        <td class="table-light">{ticket.author ? ticket.author : "TBD"}</td>
        <td class="table-light">{ticket.eta ? ticket.eta : "TBD"}</td>
      </tr>
    )
  }
}

export default ReadOnlyRow