import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './Requires-login';
import Properties  from './Properties';
import PropertyDetails from './Property-details';
import ReservationDetails from './Reservation-details';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { setSelectedDate } from "../actions/protected-data";
import '../stylesheets/reservations.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

export class Reservations extends Component {
  onDateSelect(slotInfo) {
    this.props.dispatch(setSelectedDate(slotInfo));
  }

  render() {
    let events = this.props.reservations.map((reservation, index) => {
      return { id: index, title: `${reservation.propertyName} | ${reservation.username}`, start: new Date(reservation.start), end: new Date(reservation.end), resourceId: index };
    });

    if (this.props.selectedProperty) {
      return (
        <div className="reservations">
          <h2>Reservations</h2>
          <Properties />
          <h3>Drag the mouse over the calendar to select a date/time range</h3>
          <div className="reservation-section">
            <div className="selected-property">
              <PropertyDetails />
            </div>
            <div className="reservation-info">
              <ReservationDetails />
            </div>
          </div>
          <div className="calendar-container">
            <BigCalendar selectable events={events} views={["month"]} onSelectSlot={slotInfo => this.onDateSelect(slotInfo)} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="reservations">
          <h2>Reservations</h2>
          <Properties />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    properties: state.protectedData.properties,
    reservations: state.protectedData.reservations,
    currentReservation: state.protectedData.currentReservation,
    selectedProperty: state.protectedData.selectedProperty  
  };
};

export default requiresLogin()(connect(mapStateToProps)(Reservations));