import { Link } from "react-router-dom"

const Forgot = () => {
  return (
    <div>I haven't done this yet oops <br /> 
    If I remember I'll WordArt it <br />
    <Link to="/login"><button type="button" class="btn btn-danger">Back to Login page</button></Link>
    </div>
  )
}

export default Forgot