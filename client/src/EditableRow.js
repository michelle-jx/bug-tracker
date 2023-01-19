import React from 'react'

function EditableRow({ticket, setRowView}) {

    return (
        <tr>
            <td>
                <input type="text"
                    name="title"
                    required="required"
                    placeholder='project name'></input>
            </td>
            <td>
                <input type="text"
                    name="name"
                    placeholder='assigned to which dev'></input>
            </td>
            <td>
                <input type="text"
                    name="status"
                    placeholder='status'></input>
            </td>
            <td>
                <input type="text"
                    name="priority"
                    placeholder='priority'></input>
            </td>
            <td>
                <input type="text"
                    name="issue"
                    placeholder='issue'></input>
            </td>
            <td>
                <input type="text"
                    name="eta"
                    required="required"
                    placeholder='eta'></input>
            </td>
            <input type="submit" ></input>
        </tr>
    )
}

export default EditableRow