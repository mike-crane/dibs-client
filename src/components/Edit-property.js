import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Input from './Input';
import { editSelectedProperty, deleteProperty } from "../actions/protected-data";
import '../stylesheets/edit-property.css';

class EditProperty extends Component {
  onEditProperty(values) {
    console.log(values);
    this.props.dispatch(editSelectedProperty(values._id, values));
  }

  onDeleteProperty(data_id, data) {
    let newPropertiesArray = data.filter(item => item._id !== data_id);
    this.props.dispatch(deleteProperty(data_id, newPropertiesArray));
  }

  render() {

    return (
      <div className="edit-property">
        <h2>Edit Property</h2>
        <form className="list-property" onSubmit={this.props.handleSubmit(
            values => this.onEditProperty(values)
          )}>
          <div className="form-section">
            <label htmlFor="property-name" className="address-name">
              Property name
            </label>
          <Field component={Input} type="text" name="property-name" id="property-name" autoComplete='off' />
          </div>

          <fieldset>
            <legend>Property Address</legend>
            <div className="form-section">
              <label htmlFor="street" className="address-label">
                Street
              </label>
            <Field component={Input} type="text" name="street" id="street" autoComplete='off' />
            </div>

            <div className="form-section">
              <label htmlFor="city" className="address-label">
                City
              </label>
              <Field component={Input} type="text" name="city" id="city" autoComplete='off' />
            </div>

            <div className="form-section">
              <label htmlFor="state" className="address-label">
                State
              </label>
              <Field component={Input} type="text" name="state" id="state" autoComplete='off' />
            </div>

            <div className="form-section">
              <label htmlFor="zipcode" className="address-label">
                Zip Code
              </label>
              <Field component={Input} type="text" name="zipcode" id="zipcode" autoComplete='off' />
            </div>
          </fieldset>

          <div className="form-section">
            <label htmlFor="property-type" className="property-label">
              Property type
                </label>
            <Field name="property-type" component="select">
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="apartment">Apartment</option>
            </Field>
          </div>

          <div className="form-section">
            <label htmlFor="property-photo" className="property-label">
              Property Photo
              </label>
            <input type="file" onChange={this.fileSelectedHandler} />
            {/* <Field name="property-photo" component={Input} type="file" onChange={this.fileSelectedHandler} /> */}
          </div>

          <button className="save-property-button" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Save
          </button>
        <Link className="cancel-button" to="/reservations">Cancel</Link>
          <button className="delete-property-button" type="button" disabled={this.props.pristine || this.props.submitting}>
            Delete Property
          </button>
          {/* <button className="delete-property-button" type="button" onClick={() => this.deleteProperty(selectedProperty._id, this.props.property)} disabled={this.props.pristine || this.props.submitting}>
            Delete Property
          </button> */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.protectedData.properties,
  selectedProperty: state.protectedData.selectedProperty
})

export default reduxForm({
  form: 'editProperty',
  // onSubmitSuccess: console.log('Changes have been added successfully!')
})(connect(mapStateToProps)(EditProperty));