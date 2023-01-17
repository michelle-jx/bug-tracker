import { Link } from 'react-router-dom'
import { useState } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const Ticket = ({ ticket, toggleView, handleEditField }) => {


 
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
            <ReadOnlyRow ticket={ticket} handleEditField={handleEditField}/>
        </div>
    )
}
export default Ticket;