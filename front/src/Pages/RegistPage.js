import React from 'react';
import { Link } from "react-router-dom";
import "./Authen.css";
import PropTypes from "prop-types";

export default function RegistPage(props) {
  const [errorText, setErrorText] = React.useState('');
  const onSubmit = async (values) => {
    setErrorText('');
    const response = await fetch("/regist", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values), // body data type must match "Content-Type" header
    });
    debugger;
    const res = await response.json();
    if (res && res.success) {
      props.history.replace('/viewRecipe');
    } else {
      setErrorText(res.message || "sign in failed!");
    }
  };

  return (
    <div className="/regist">
      <div className="title"><h3>Create New Account</h3></div>
      <div className="row">
        <div className="col-sm-4 box border">
          <form id="formRegist">
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
              style={{marginBottom: "4px"}}
            ></div>
            <div className="d-grid gap-2 mx-auto center-font">
              <button type="submit" className="btn btn-success">Sign Up</button>
            </div>
          </form>
          <hr />
          <div className="center-font">
            <p className="secondfont">Already have an account?</p>
            <Link
              className="btn btn-primary secondfont"
              to="/login"
              role="button"
              >Sign In</Link>
          </div>
        </div>
      </div>
    </div>




  );
}