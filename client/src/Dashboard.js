import Navbar from './Navbar'
import TicketList from './TicketList'
import BarChart from './BarChart'
import {Link} from "react-router-dom"

const Dashboard = ({ user, handleLogout }) => {
  
  return (
    <div>
      <h1>Hi {user.username}, here are your tickets.</h1>
      <TicketList />
      <BarChart user={user}/>
      <Link to="/auth"><button type="button" class="btn btn-danger" onClick={handleLogout}>Log Out</button></Link>
      <Navbar />
    </div>
  )
}

export default Dashboard