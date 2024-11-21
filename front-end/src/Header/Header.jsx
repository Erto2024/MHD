import "./Header.css"

function Header() {
  return(
    <div className="navbar">
      <img src="/images/logo.svg" />
      <div className="navbar-container">
        <div className="nav-inside">
          <img src="/images/bus-front.svg"/>
          <p>Comfort</p>
        </div>
        <div className="nav-inside">
          <img src="/images/bus-stop.svg" />
          <p>Quickness</p>
        </div>
      </div>
    </div>
  )
}
export default Header