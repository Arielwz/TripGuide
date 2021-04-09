import React from 'react';
import { Link } from "react-router-dom";
import "./Authen.css";
import PropTypes from "prop-types";

export default function LoginPage(props) {
  

  return (
    <div className = "/login">
      <div className="title"><h3>Sign in to upload posts and save your favourite posts.</h3></div>
      
      <div className="row">
        <div className="col-sm-4 box border">
          <form id="formLogin">
            <div className="mb-2">
              <label for="InputUsername" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label for="InputPassword" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="pwd"
              />
            </div>
            <div
              id="error"
              className="alert-danger"
              role="alert"
              style={{marginBottom: "4px",}}
            ></div>
            <div className="d-grid gap-2 mx-auto center-font">
              <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <hr />
          <div className="center-font">
            <Link
              className="btn btn-success secondfont"
              to="/regist"
              role="button"
              >Creat New Account</Link>
          </div>
        </div>
      </div>

    </div>

  );
}