import React, { Component } from "react";
import { connect } from 'react-redux';
import requiresLogin from './Requires-login';
import { fetchPropertyData } from '../actions/protected-data';

class Dashboard extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Property data: {this.props.properties}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    properties: state.protectedData.properties
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));