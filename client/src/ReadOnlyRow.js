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
    console.log("editing form")

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const editedFormData = { ...editFormData }
    editedFormData[fieldName] = fieldValue
    setEditFormData(editedFormData)
  }

  function testing() {
    console.log("hello")
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    console.log('submit edit form')

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
  /*     .then(resp => resp.json()) */
      .then(resp => {
        if (resp.ok) {
          resp.json().then(console.log("patching"))
           //do we need to set tickets again?
        }
      })
      .then(setTickets)
  }

  if (!rowView) {
    return (
      <div>
      <form onSubmit={handleEditFormSubmit}>
        <input placeholder={ticket.project.title} name="title" onChange={handleEditTicket} defaultValue={editFormData.title} />
        <input placeholder={ticket.user.name} name="name" onChange={handleEditTicket} defaultValue={editFormData.name} />
        <input placeholder={ticket.status} name="status" onChange={handleEditTicket} defaultValue={editFormData.status} />
        <input placeholder={ticket.priority} name="priority" onChange={handleEditTicket} defaultValue={editFormData.priority} />
        <input placeholder={ticket.issue} name="issue" onChange={handleEditTicket} defaultValue={editFormData.issue} />
        <input placeholder={ticket.author} name="author" onChange={handleEditTicket} defaultValue={editFormData.author} />
        <input placeholder={ticket.eta} name="eta" onChange={handleEditTicket} defaultValue={editFormData.eta} />
        <button>Submit</button>
        <button onClick={toggleView}>Cancel</button>
      </form>
      </div>
    )

  } else {

    return (
      <tr class="table-light" className="table-row" onClick={toggleView}>
        <Link to="/projects/${ticket.project.id}" ticket={ticket}><td><b>{ticket.project.title}</b></td></Link>
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