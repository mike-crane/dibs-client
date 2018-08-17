import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearSelectedProperty } from '../actions/protected-data';
import { clearAuthToken } from '../local-storage';
import Logo from '../images/logo.svg';
import '../stylesheets/header.css';

class Header extends Component {
  logOut() {
    this.props.dispatch(clearAuth());
    this.props.dispatch(clearSelectedProperty());
    clearAuthToken();
    this.props.history.push("/");
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = <button className="logout-button" tabIndex="0" onClick={() => this.logOut()}>
          Log out
        </button>;
    }
    return <div className="header-bar">
        <Link to="/dashboard">
          <img src={Logo} alt={this.props.title} />
        </Link>
        {logOutButton}
      </div>;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Header));
