import { Link, useLocation } from "react-router-dom";


// copy bootstrap navbar 的格式过来，要把所有的a 改成link， href改成to=对应的route path
export default function NavigationComponent() {
  const location = useLocation();
  console.log("Render NavigationComponent", location);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bay Area Trip Guide
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  "nav-link" + (location.pathname === "/list" ? " active" : "")
                }
                aria-current="page"
                to="/list"
              >
                List
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  "nav-link" + (location.pathname === "/upload" ? " active" : "")
                }
                to="/upload"
              >
                Upload
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Link
              </Link>
            </li>
          </ul>
          
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <Link className="btn btn-success" type="submit" role="button" to="/login" style={{marginLeft: "30px"}}>
              Sign In
            </Link>
        </div>
      </div>
    </nav>
  );
}
