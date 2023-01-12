import { useState } from 'react'

function AddTicket({ user }) {
    const [addFormData, setAddFormData] = useState({
        issue: "",
        priority: "",
        author: user.name,
    })

    return (
        <div>
            <h3>Add a Ticket!</h3>
            <form>
                <input type="text"
                    required="required"
                    placeholder='status'></input>
                <input type="text"
                    required="required"
                    placeholder='priority'></input>
                <input type="text"
                    required="required"
                    placeholder='issue'></input>
                    <button>Submit</button>
            </form></div>
    )
}

export default AddTicket

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