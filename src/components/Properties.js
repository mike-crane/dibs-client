import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './Requires-login';
import { fetchPropertyData, setSelectedProperty, clearSelectedDate } from '../actions/protected-data';
import FaPlus from 'react-icons/lib/fa/plus';
import '../stylesheets/properties.css';

class Properties extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchPropertyData());
  // }

  onPropertySelect(property, username) {
    this.props.dispatch(setSelectedProperty(property, username));
    this.props.dispatch(clearSelectedDate());
  }

  render() {
    if (this.props.properties.length === 0) {
      return (
      <div className='properties'>
        <h3>Click the button below to add a property</h3>
        <div className='property-thumbnails'>
          <Link className='add-property-button' to='/add-property'><FaPlus /></Link>
        </div>
      </div>
    );
    } else {
      let username = this.props.username;

      let propertyList = this.props.properties.map(property => <div className="property-container" key={property.id} onClick={() => this.onPropertySelect(property, username)}><img className="property-thumbnail" src={property.thumbUrl} alt={property.name} /><div className="middle"><div className="text">{property.name}</div></div></div>);

      return (
        <div className='properties'>
          <h3>Select a Property</h3>
          <div className='property-thumbnails'>
            {propertyList}
            <Link className='add-property-button' to='/add-property'><FaPlus /></Link>
          </div>
        </div>
      );
    }
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
