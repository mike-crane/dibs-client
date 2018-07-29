import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveReservation } from "../actions/protected-data";
import '../stylesheets/reservation-details.css';

class ReservationDetails extends Component {
  // onSaveReservation(currentReservation, reservations) {
  //   this.props.dispatch(saveReservation(currentReservation, reservations));
  //   this.props.history.push('/dashboard');
  // }

  onSaveReservation(event) {
    let newReservation = this.props.currentReservation;
    let reservations = this.props.reservations;
    event.preventDefault();
    this.props.dispatch(saveReservation(newReservation, reservations));
    // this.props.history.push("/dashboard");
  }

  render() {
    if (this.props.currentReservation.propertyID) {
      return (
        <div className="reservation-details">
          <h3>Reservation</h3>
          <div className="reservation-info">
            <form onSubmit={e => this.onSaveReservation(e)}>
              <label htmlFor="res-name">Guest:</label>
              <input
                id="res-name"
                type="text"
                readOnly
                value={this.props.name}
              />
              <label htmlFor="res-start">Start:</label>
              <input
                id="res-start"
                type="text"
                readOnly
                value={this.props.currentReservation.start.toLocaleString()}
              />
              <label htmlFor="res-end">End:</label>
              <input
                id="res-end"
                type="text"
                readOnly
                value={this.props.currentReservation.end.toLocaleString()}
              />

              <button>Save Reservation</button>
            </form>
          </div>
        </div>
      );

      // <div className='reservation-details'>
      //   <h3>Reservation</h3>
      //   <div className='reservation-info'>
      //     <div>
      //       Guest: {this.props.name}
      //     </div>
      //     <div>
      //       Start: {this.props.currentReservation.start.toLocaleString()}
      //     </div>
      //     <div>
      //       End: {this.props.currentReservation.end.toLocaleString()}
      //     </div>
      //   </div>
      //   <Link
      //     className='save-reservation-button' to='/dashboard'
      //     onClick={this.onSaveReservation(currentReservation, reservations)}
      //   >
      //     Save Reservation
      //   </Link>
      // </div>
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