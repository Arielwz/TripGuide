import React, {useState} from 'react';
import { Link, useLocation, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';


const Nav = function NavigationComponent(props) {
  const [searchKey, setSearchKey] = useState('');
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
                  "nav-link" + (location.pathname === "/" ? " active" : "")
                }
                aria-current="page"
                to="/"
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
              onChange={(ev) => {
                setSearchKey(ev.target.value);
              }}
            />
            <button className="btn btn-outline-success" onClick={(ev) => {
               ev.preventDefault();
              props.onSearch && props.onSearch(searchKey);
            }}>
              Search
            </button>
          </form>

          <div className="btn btn-success" type="submit" role="button" style={{marginLeft: "30px"}} onClick={async (ev) => {
            ev.preventDefault();
            const {
              hasLogin,
              onLogout
            } = props;
            if (hasLogin) {
              onLogout && onLogout();
            } else {
              props.history.replace('/login');
            }
          }}>
              {props.hasLogin ? 'Logout' : 'Sign In'}
            </div>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  hasLogin: PropTypes.bool,
  onLogout: PropTypes.func,
  onSearch: PropTypes.func
};

export default withRouter(Nav);