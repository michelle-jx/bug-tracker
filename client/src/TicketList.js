import React, { useEffect, useState } from 'react'
import Ticket from './Ticket'

const TicketList = () => {
    const [tickets, setTickets] = useState([])
    // const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("/tickets")
            .then(resp => resp.json())
            .then(data => setTickets(data))
    }, [])

    // useEffect(() => {
    //     fetch("/projects")
    //         .then(resp => resp.json())
    //         .then(data => setProjects(data))
    // }, [])

    //later, need to filter out unresolved tickets
    const ticketArray = tickets.map((ticket) => {
        return (<Ticket ticket={ticket} />)
    })

    return (
        <div>
            <h2>ALL TICKETS</h2>
            {ticketArray}
        </div>
    )
}

export default TicketList