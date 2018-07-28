import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/reservation-details.css';

class ReservationDetails extends Component {
  render() {
    if (this.props.currentReservation.propertyID) {
    return (
      <div className="reservation-details">
        <h3>Reservation</h3>
        <div className="reservation-info">
          <div>Guest: {this.props.name}</div>
          <div>Start: {this.props.currentReservation.start.toLocaleString()}</div>
          <div>End: {this.props.currentReservation.end.toLocaleString()}</div>
        </div>
        <Link className="edit-reservation-button" to="/edit-reservation">
          Save Reservation
        </Link>
      </div>
    );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return { 
    username: state.auth.currentUser.username, 
    name: `${currentUser.firstName} ${currentUser.lastName}`, 
    currentReservation: state.protectedData.currentReservation 
  };
};

export default (connect(mapStateToProps)(ReservationDetails));