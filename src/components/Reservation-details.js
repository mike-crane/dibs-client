import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveReservation } from '../actions/protected-data';
import '../stylesheets/reservation-details.css';

class ReservationDetails extends Component {
  onSaveReservation(event) {
    let newReservation = this.props.currentReservation;
    let reservations = this.props.reservations;
    event.preventDefault();
    this.props.dispatch(saveReservation(newReservation, reservations));
    // this.props.history.push('/dashboard');
  }

  render() {
    let options = { weekday: "long", month: "short", day: "numeric" };

    if (this.props.currentReservation.propertyID) {
    return (
      <div className="reservation-details">
        <h4>Reserve this Property</h4>
        <form onSubmit={e => this.onSaveReservation(e)}>
            <div className="res-block">
              <label htmlFor='res-name'>Guest: </label>
              <input
                id='res-name'
                type='text'
                readOnly
                value={this.props.name}
              />
            </div>
            
            <div className="res-block">
              <label htmlFor='res-start'>Start: </label>
              <input
                id='res-start'
                type='text'
                readOnly
                value={this.props.currentReservation.start.toLocaleString('en-US', options)}
              />
            </div>
            
            <div className="res-block">
              <label htmlFor='res-end'>End: </label>
              <input
                id='res-end'
                type='text'
                readOnly
                value={this.props.currentReservation.end.toLocaleString('en-US', options)}
              />
            </div>

            <button>Save Reservation</button>
          </form>
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
    currentReservation: state.protectedData.currentReservation,
    reservations: state.protectedData.reservations  
  };
};

export default (connect(mapStateToProps)(ReservationDetails));