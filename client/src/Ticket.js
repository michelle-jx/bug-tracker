import { Link } from 'react-router-dom'

const Ticket = ({ ticket, user }) => {
    // console.log(ticket.user.name)

    //how to grab id when they click ticket.project.title?
    return (
        <div class='ticket-list'>
            Project: <Link to='/projects/${:id}`'>{ticket.project.title}</Link>
            <p>Assigned to: {ticket.user.name} &nbsp;
                Status: {ticket.status} &nbsp;
                Priority: {ticket.priority}&nbsp;
                Issue type: {ticket.issue} &nbsp;
                Author: {ticket.author} &nbsp;
                ETA to completion: {ticket.eta}
            </p>
            <button>Edit</button>
        </div>
    )
}
export default Ticket;