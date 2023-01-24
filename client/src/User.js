import { AiOutlineBug, AiFillHeart } from 'react-icons/ai'
import { useState } from 'react'

const User = ({ user }) => {
    const [admin, setAdmin] = useState(false)

    // console.log(user.projects)
    const uproj = user.projects.map((proj) => {
        return (<ul>{proj.title ? proj.title : "nothing yet!"}</ul>)
    })

    function toggleAdmin() {
        setAdmin(admin => !admin)
    }

    return (
        <div>
            <div className='listingSection'>

                <div className="heading flex">
                    <h1>{user.name}{user.admin ? ": Admin Level" : null}</h1>&nbsp;
                </div>

                <AiOutlineBug className="icon" />
                <AiFillHeart className='icon' />
                <li>{user.name}'s projects:</li>
                {uproj}
                <div className="secContainer flex">
                    <div className="singleItem">
                        {admin ? <button type="submit" class="btn btn-outline-primary" onClick={toggleAdmin}>Remove admin access</button> : <button type="submit" class="btn btn-outline-primary" onClick={toggleAdmin}>Promote this user to admin!</button>}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default User