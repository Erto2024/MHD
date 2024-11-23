import { Link } from "react-router-dom";

function Result () {
  return <>
    <h1>This is the second page</h1>
    <Link to="/" >Go to the HomePage</Link>
  </>
}

export default Result;