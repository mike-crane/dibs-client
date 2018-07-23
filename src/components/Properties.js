import React, { Component } from 'react';
import { connect } from "react-redux";
import requiresLogin from "./Requires-login";
import { fetchPropertyData } from "../actions/protected-data";
import Placeholder from '../images/img-placeholder.png';
import '../stylesheets/properties.css';

class Properties extends Component {
  render() {
    let propertyList = this.props.properties.map((property, index) => <img key={index} src={property.thumbUrl} />);
    return (
      <div className='properties'>
        <h3>Properties</h3>
        <div className='property-thumbnails'>
          {propertyList}
          <button type='button'>Add Property</button>
        </div>
      </div>
    )
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
