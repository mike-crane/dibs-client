import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../stylesheets/property-details.css";

const PropertyDetails = props => {
  let edit;

  // check if user is the one who created the property and if so render the edit link
  if (props.property.owner === props.username) {
    edit = (
      <Link className="edit-property-button" to="/edit-property">
        Edit
      </Link>
    );
  }
  return (
    <div className="property-details">
      <div className="property-image">
        <img src={props.property.thumbUrl} alt={props.property.name} />
      </div>
      <div className="property-info">
        <h4>{props.property.name}</h4>
        <ul>
          <li>{props.property.street}</li>
          <li>
            {props.property.city}, {props.property.state}{" "}
            {props.property.zipcode}
          </li>
        </ul>
        {edit}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    property: state.protectedData.selectedProperty,
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(PropertyDetails);
