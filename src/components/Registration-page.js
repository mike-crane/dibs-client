import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import RegistrationForm from "./Registration-form";
import "../stylesheets/registration-page.css";

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="home">
      <RegistrationForm />
      <div className="login-wrapper">
        <p>Already registered?</p> <Link to="/">Login</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
