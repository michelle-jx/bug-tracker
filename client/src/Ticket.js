import { Link } from 'react-router-dom'
import { useState } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const Ticket = ({ ticket, toggleView, handleEditField, tickets, setTickets }) => {


 
    // console.log(ticket.user.name)
    
  /*   function handleDeleteTicket(e) {
        fetch("/dashboard", {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(onDeleteTicket)
    } */

    //how to grab id when they click ticket.project.title?
    return (
        <div class='ticket-list'>
            <ReadOnlyRow ticket={ticket} handleEditField={handleEditField} tickets={tickets} setTickets={setTickets}/>
        </div>
    )
}
export default Ticket;