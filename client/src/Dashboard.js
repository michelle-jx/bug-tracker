import Navbar from './Navbar'
import TicketList from './TicketList'
import BarChart from './BarChart'
import {Link, redirect} from "react-router-dom"
import AddTicket from './AddTicket'

const Dashboard = ({ user, handleLogout }) => {

  return (
    <div>
      <h1>Hi {user.username}, here are your tickets.</h1>
      <AddTicket user={user}/>
      <TicketList user={user}/>
      <BarChart user={user}/>
      <Link to="/login"><button type="button" class="btn btn-danger" onClick={handleLogout}>Log Out</button></Link>
      <Navbar />
    </div>
  )
}

export default Dashboard