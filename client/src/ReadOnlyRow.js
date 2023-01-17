import { Link } from "react-router-dom"
import { useState } from "react"

function ReadOnlyRow({ ticket, handleEditField }) {
  const [rowView, setRowView] = useState(true)

  function toggleView(e) {
    e.preventDefault()
    console.log("toggling")
    setRowView(rowView => !rowView)
  }

  function handleEditTicket(e) {
    e.preventDefault()
    console.log("editing form")
    setRowView(true)
  }

  if (!rowView) {
    return (
      <form onSubmit={handleEditTicket}>
        <input placeholder="update project name" />
        <input placeholder="update assigned dev" />
        <input placeholder="update status" />
        <input placeholder="update priority level" />
        <input placeholder="update issue type" />
        <input placeholder="update ticket author" />
        <input placeholder="update completion ETA" />
        <button>Submit</button>
      </form>
    )
  } else {

    return (
      <tr class="table-light" className="table-row" onClick={toggleView}>
        <Link to="/projects/${id}" ticket={ticket}><td><b>{ticket.project.title}</b></td></Link>
        <td class="table-light" >{ticket.user.name ? ticket.user.name : "TBD"}</td>
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