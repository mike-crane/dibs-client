import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './Requires-login';
import { fetchPropertyData } from '../actions/protected-data';
import Ribbon from './Ribbon';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../stylesheets/dashboard.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Dashboard extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render() {
    let events = this.props.reservations.map((reservation, index) => {
      return {
        id: index,
        title: reservation.propertyName,
        start: new Date(reservation.start),
        end: new Date(reservation.end),
        resourceId: index
      }
    });

    let reservations = this.props.reservations.map((reservation, index) => <p key={index}>{reservation.propertyName} {reservation.start}</p>);

    return (
      <div className='dashboard'>
        <div className='welcome-message'>
          <h2>Welcome {this.props.username}</h2>
        </div>
        <div className='dashboard-protected-data'>
          <Ribbon heading='Active Reservations' subheading='' />
          {reservations}
        </div>
        <div className='calendar-container'>
        <BigCalendar events={events} selectable views={['month', 'week']} />
        </div>
        <Link className='reservations-button' to='/reservations'>Reserve a Property</Link>
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