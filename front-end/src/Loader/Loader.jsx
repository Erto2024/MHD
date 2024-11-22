import "./Loader.css"

function Loader () {
  return <div className="loader">
    <input className="firstInput" type="text" />
    <input className="secondInput" type="text" />
    <input type="date" className="date" />
    <input type="time" className="time" />
    <button className="searchButton" />
  </div>
}

export default Loader