import TicketList from './TicketList'
import BarChart from './BarChart'
import { Link } from "react-router-dom"
import Sidebar from './body/sidebar/Sidebar'
import Body from './body/Body'


const Dashboard = ({ user, handleLogout }) => {

  return (
    <div className='container'>
        <Sidebar handleLogout={handleLogout}/>
      <TicketList user={user} />
    </div>
  )
}

export default Dashboard