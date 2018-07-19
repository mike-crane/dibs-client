import React, { Component } from "react";
import { connect } from 'react-redux';
import requiresLogin from './Requires-login';
import { fetchPropertyData } from '../actions/protected-data';
import Ribbon from './Ribbon';
import "../stylesheets/dashboard.css";

class Dashboard extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render() {
    let reservations = this.props.reservations.map((reservation, index) => <p key={index}>{reservation.propertyName} {reservation.start}</p>)
    return (
      <div className="dashboard">
        <div className="welcome-message">
          <h2>Welcome {this.props.username}</h2>
        </div>
        <div className="dashboard-protected-data">
          <p>[<em>Calendar Component goes here</em>]</p>
          <Ribbon heading="Active Reservations" subheading="" />
          {reservations}
        </div>
        <button type="button">Reserve a Property</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    properties: state.protectedData.properties,
    reservations: state.protectedData.reservations
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));