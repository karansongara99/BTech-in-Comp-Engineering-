import { Link, Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid bg-info p-3 m-1">
    <Link className="navbar-brand" to="/home">Data Information</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/home">Home</Link> 
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/student">Student</Link>
        <Link className="nav-link" to="/faculty">Faculty</Link>
      </div>
    </div>
  </div>
</nav>
            <Outlet/>
        </>
    )
}

export default Layout