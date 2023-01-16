import { Link } from 'react-router-dom'
import { useState } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const Ticket = ({ ticket, rowView, setRowView, toggleView }) => {


 
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
         {rowView? <ReadOnlyRow ticket={ticket}/> : <EditableRow ticket={ticket} setRowView={setRowView}/>}
        </div>
    )
}
export default Ticket;