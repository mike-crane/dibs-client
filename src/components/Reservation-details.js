import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postReservationData } from "../actions/protected-data";
import '../stylesheets/reservation-details.css';

class ReservationDetails extends Component {
  onPostReservationData(event) {
    let newReservation = this.props.currentReservation;
    // let reservations = this.props.reservations;
    this.props.dispatch(postReservationData(newReservation));
    event.preventDefault();
  }

  render() {
    let options = { weekday: "long", month: "short", day: "numeric" };

    if (this.props.currentReservation.propertyID) {
      return <div className="reservation-details">
          <h4>Reserve this Property</h4>
          <form onSubmit={e => this.onPostReservationData(e)}>
            <div className="res-block">
              <label htmlFor="res-name">Guest: </label>
              <input id="res-name" type="text" readOnly value={this.props.name} />
            </div>

            <div className="res-block">
              <label htmlFor="res-start">From: </label>
              <input id="res-start" type="text" readOnly value={this.props.currentReservation.start.toLocaleString("en-US", options)} />
            </div>

            <div className="res-block">
              <label htmlFor="res-end">To: </label>
              <input id="res-end" type="text" readOnly value={this.props.currentReservation.end.toLocaleString("en-US", options)} />
            </div>

            <button>Save Reservation</button>
          </form>
        </div>;
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return { 
    username: state.auth.currentUser.username, 
    name: `${currentUser.firstName} ${currentUser.lastName}`, 
    currentReservation: state.protectedData.currentReservation,
    reservations: state.protectedData.reservations  
  };
};

export default (connect(mapStateToProps)(ReservationDetails));