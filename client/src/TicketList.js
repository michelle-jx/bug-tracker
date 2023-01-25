import React, { useEffect, useState } from 'react'
import Ticket from './Ticket'
import Table from 'react-bootstrap/Table';

const TicketList = ({ user }) => {
    //ReadOnly = true, Editable = false
    const [tickets, setTickets] = useState([])
    const [sort, setSort] = useState("")
    const [addFormData, setAddFormData] = useState({
        title: "",
        priority: "",
        issue: ""
    })

    useEffect(() => {
        fetch("/tickets")
            .then(resp => resp.json())
            .then(data => {
                setTickets(data)
            })
    }, [])
    // console.log(tickets)
    // console.log(user)

    const allTickets = tickets.map((ticket) => {
        return (<Ticket ticket={ticket} handleEditField={handleEditField}/>)})
    
    const t = tickets.filter((ticket) => ticket.user.name === user.name)
    const myTickets = t.map((ticket) => {
        return (<Ticket ticket={ticket} handleEditField={handleEditField} tickets={tickets} setTickets={setTickets}/>)
    })


    function sortTickets(a, b, ticket) {
         const nameA = ticket.name.toLowerCase();
         const nameB = ticket.name.toLowerCase();
    
         if (nameA < nameB) {
             return -1
         } else if (nameB > nameA) {
             return 1
         } else return 0
     }

    function handleEditField() {
        console.log("editing field")
    }

    
    function handleAddTicket(e) {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value;
        
        const newFormData = { ...addFormData }
        newFormData[fieldName] = fieldValue
        
        setAddFormData(newFormData)
    }

    function handleAddFormSubmit(e) {
        e.preventDefault();
        
        const newTicket = {
            title: addFormData.title,
            priority: addFormData.priority,
            issue: addFormData.issue
        }
        const newTickets = [...tickets, newTicket]
        
        const configObj = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTicket)
        }
        fetch("/dashboard", configObj)
        .then(r => {
                if (r.ok) {
                    r.json().then((newTickets) => setTickets(newTickets))
                }
            })
            .then(window.location.reload())
        }
        
        return (
            <div className='mainContent'>
            <div className='ticket-list'>
                 {user.admin?<h2>Admin Mode: All Tickets</h2>  :<h1>Hi {user.username}, here are your tickets.</h1>}
            <h4 className='add-form-headers'>Project Name &nbsp; Priority &nbsp; Issue Type </h4>            
            <form onSubmit={handleAddFormSubmit}>
                <input type="text"
                    name="title"
                    required="required"
                    placeholder='project name'
                    onChange={handleAddTicket}></input>
                    &nbsp;&nbsp;
                <input type="text"
                    name="priority"
                    required="required"
                    placeholder='priority'
                    onChange={handleAddTicket}></input>
                    &nbsp;&nbsp;
                <input type="text"
                    name="issue"
                    required="required"
                    placeholder='issue'
                    onChange={handleAddTicket}></input>
                    &nbsp; &nbsp;
                <button type="submit" class="btn btn-outline-primary">Submit</button>
            </form>
            <form>
                {/* <button onClick={toggleView}>Edit</button> */}
                <Table className="main" class="table-light">
                    <tbody>
                        <thead>
                            <th scope="col">Project</th>
                            <th scope="col">Dev:</th>
                            <th scope="col">Status </th>
                            <th scope="col">Priority</th>
                            <th scope="col">Issue type</th>
                            <th scope="col">Ticket author</th>
                            <th scope="col">ETA</th>
                            {/* <th scope="col">Possible solutions</th> */}
                        </thead>
                        {user.admin ? allTickets : myTickets}
                    </tbody>
                </Table>
            </form>
        </div>
        </div>
    )
}
export default TicketList

//for dropdown options on form
//the project dropdown is gonna need OOP perhaps?? or leave all inputs as strings so they can add new types?
{/* <label for="issue">Issue type</label>
                <select name='issue-types'>
                <option value="bug">Bug</option>
                <option value="request">Request</option>
                <option value="task">Task</option>
                </select>
                <label for="issue">Priority Level</label>
                <select name='priority level'>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                </select>
            <button>Submit</button> */}

            /*   function onDeleteTicket(id) {
                  const updatedTickets = allTickets.filter((ticket) => ticket.id !== id)
                  console.log(tickets)
                  setTickets(updatedTickets)
                  updatedTickets.map((ticket) => {
                      return (<Ticket ticket={ticket} onDeleteTicket={onDeleteTicket} />)
                  })
              } */
            //later, need to filter out unresolved tickets
            
            //sort by ID will group by dev, i think?