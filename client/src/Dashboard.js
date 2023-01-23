import TicketList from './TicketList'
import BarChart from './BarChart'
import {Link} from "react-router-dom"
import Sidebar from './body/sidebar/Sidebar'
import Body from './body/Body'

const Dashboard = ({ user, handleLogout }) => {

  return (
    <div className='container'>
      <h1>Hi {user.username}, here are your tickets.</h1>
      <TicketList user={user}/>
      <BarChart user={user}/>
      <Sidebar />
      <Body />
      <Link to="/login"><button type="button" class="btn btn-danger" onClick={handleLogout}>Log Out</button></Link>
    </div>
  )
}

export default Dashboard