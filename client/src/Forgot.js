import { Link } from "react-router-dom"
import WordArt from 'react-wordart'

const Forgot = () => {
  return (
    <div>
    <WordArt text="Try again later" theme={`rainbow`} fontsize={200}/><br />
    <WordArt text="I also don't know your password" theme={`italicOutline`} fontsize={100}/><br />
    <Link to="/login"><button type="button" class="btn btn-primary">Back to Login page</button></Link>
    </div>
  )
}

export default Forgot