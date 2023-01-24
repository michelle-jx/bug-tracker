import { useEffect, useState } from 'react'
import User from './User'
import Sidebar from './body/sidebar/Sidebar'
import Body from './body/Body'

const UserList = ({ user }) => {
    const [users, setUsers] = useState([])

    useEffect(() =>
        fetch("/users")
            .then(r => {
                if (r.ok)
                    r.json().then(r => setUsers(r))
            }), [])

    const userList = users.map((user) => {
        return (<User user={user} />)
    })

    return (
        <div>
            <div className='container'>
                    <div><Sidebar user={user} /></div>
                <div className='project-list'>
                    {userList}
                </div></div>
        </div>
    )
}

export default UserList