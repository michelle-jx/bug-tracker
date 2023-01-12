import React, { useEffect, useState } from 'react'
import Ticket from './Ticket'
import { Link } from 'react-router-dom'


const TicketList = ({user}) => {
    const [tickets, setTickets] = useState([])

//i feel like i should show/hide the add ticket page?? 

    useEffect(() => {
        fetch("/tickets")
            .then(resp => resp.json())
            .then(data => {
                setTickets(data)
                // console.log(tickets)
            })
    }, [])

    const allTickets = tickets.map((ticket) => {
        return (<Ticket ticket={ticket} user={user}/>)
    })
    //later, need to filter out unresolved tickets
    
    //sort by ID will group by dev, i think?
    const sortTickets = allTickets.sort()

    return (
        <div className='ticket-list'>
            <h2>ALL TICKETS</h2>
            <div className="main">
            {sortTickets}
            </div>
            {/* {user.admin ? allTickets : myTickets} */}
        </div>
    )
}

export default TicketList