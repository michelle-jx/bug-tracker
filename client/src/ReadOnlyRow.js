import { Link } from "react-router-dom"
import { useState } from "react"

function ReadOnlyRow({ ticket, handleEditField, tickets, setTickets }) {
  const [rowView, setRowView] = useState(true)
  const [editFormData, setEditFormData] = useState({
    title: ticket.project.title,
    name: ticket.user.name,
    status: ticket.status,
    priority: ticket.priority,
    issue: ticket.issue,
    author: ticket.author,
    eta: ticket.eta,
    id: ticket.id
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
      eta: editFormData.eta,
      id: editFormData.id
    }
    console.log(updatedTicket)

    fetch("/dashboard", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedTicket)
    })
      /*     .then(resp => resp.json())  */
      .then(resp => {
        if (resp.ok) {
          resp.json().then(setTickets)
          //do we need to set tickets again?
        }
      })
      .then(console.log("patching"))
    window.location.reload()
  }

  if (!rowView) {
    return (
      <div>
        <form className="edit-ticket-form">
          Project Name:<input placeholder={ticket.project.title} name="title" onChange={handleEditTicket} defaultValue={editFormData.title} /><br />
          Assigned to:<input placeholder={ticket.user.name} name="name" onChange={handleEditTicket} defaultValue={editFormData.name} /><br />
          Status:<input placeholder={ticket.status} name="status" onChange={handleEditTicket} defaultValue={editFormData.status} /><br />
          Priority Level:<input placeholder={ticket.priority} name="priority" onChange={handleEditTicket} defaultValue={editFormData.priority} /><br />
          Issue Type:<input placeholder={ticket.issue} name="issue" onChange={handleEditTicket} defaultValue={editFormData.issue} /><br />
         {/*  <select name='issue' onChange={handleEditTicket} value={editFormData.issue}>
            <option value="bug">Bug</option>
            <option value="request">Request</option>
            <option value="task">Task</option>
          </select> */}
          Ticket Author:<input placeholder={ticket.author} name="author" onChange={handleEditTicket} defaultValue={editFormData.author} /><br />
          Completion ETA:<input placeholder={ticket.eta} name="eta" onChange={handleEditTicket} defaultValue={editFormData.eta} /><br />
          <button type="button" class="btn btn-outline-primary" onClick={handleEditFormSubmit}>Submit</button>
          <br />
          <button type="button" class="btn btn-outline-danger" onClick={toggleView}>Cancel</button>
        </form>
      </div>
    )

  } else {

    return (
      <tr class="table-light" className="table-row" onClick={toggleView}>
        <Link to={`/projects/${ticket.project.id}`}><td><b>{ticket.project.title}</b></td></Link>
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