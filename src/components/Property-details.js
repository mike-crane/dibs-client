import React from 'react';
import Placeholder from '../images/img-placeholder.png';
import "../stylesheets/property-details.css";

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <h3>Property Details</h3>
      <div className="property-image">
        <img src={Placeholder} alt="placeholder" />
      </div>
      <div className="property-info">
        <ul>
          <li>Incididunt pariatur ea sunt ullamco est ex ipsum</li>
          <li>Magna aute qui consectetur aliqua</li>
          <li>Dolore ea laborum adipisicing eu anim exercitation</li>
        </ul>
      </div>
      <button id="edit-property" type="button">Edit</button>
    </div>
  )
}

export default PropertyDetails
