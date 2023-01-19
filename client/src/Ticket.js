import ReadOnlyRow from './ReadOnlyRow';

const Ticket = ({ ticket, handleEditField, tickets, setTickets }) => {

    return (
        <div class='ticket-list'>
            <ReadOnlyRow ticket={ticket} handleEditField={handleEditField} tickets={tickets} setTickets={setTickets}/>
        </div>
    )
}
export default Ticket;