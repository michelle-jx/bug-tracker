import { Link } from "react-router-dom"

function ReadOnlyRow({ticket}) {
  return (
    <tr class="table-light" className="table-row">
        <Link to="/projects/${id}" ticket={ticket}><td><b>{ticket.project.title}</b></td></Link>
            <td class="table-light">{ticket.user.name ? ticket.user.name : "TBD"}</td>
            <td class="table-light">{ticket.status ? ticket.status : "TBD"}</td>
            <td class="table-light">{ticket.priority}</td>
            <td class="table-light">{ticket.issue ? ticket.issue : "TBD"}</td>
            <td class="table-light">{ticket.author ? ticket.author : "TBD"}</td>
            <td class="table-light">{ticket.eta ? ticket.eta : "TBD"}</td></tr>
  )
}

export default ReadOnlyRow