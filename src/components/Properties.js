import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './Requires-login';
import { fetchPropertyData, setSelectedProperty, clearSelectedDate } from '../actions/protected-data';
import FaPlus from 'react-icons/lib/fa/plus';
import '../stylesheets/properties.css';

class Properties extends Component {
  onPropertySelect(property, username) {
    this.props.dispatch(setSelectedProperty(property, username));
    this.props.dispatch(clearSelectedDate());
  }

  render() {
    let propertyList = this.props.properties.map(property => <img src={property.thumbUrl} key={property.id} 
      onClick={ () => this.onPropertySelect(property, username) } />);

    let username = this.props.username;

    return (
      <div className='properties'>
        <h3>Properties</h3>
        <div className='property-thumbnails'>
          {propertyList}
          <Link className='add-property-button' to='/add-property'><FaPlus /></Link>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    properties: state.protectedData.properties,
    reservations: state.protectedData.reservations
  };
};

export default requiresLogin()(connect(mapStateToProps)(Properties));
