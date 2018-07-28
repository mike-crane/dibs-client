import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearSelectedProperty } from '../actions/protected-data';
import { clearAuthToken } from '../local-storage';
import '../stylesheets/header.css';

class Header extends Component {
  logOut() {
    this.props.dispatch(clearAuth());
    this.props.dispatch(clearSelectedProperty());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = <button className='logout-button' onClick={() => this.logOut()}>Log out</button>;
    }
    return (
      <div className='header-bar'>
        <h1>{this.props.title}</h1>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
