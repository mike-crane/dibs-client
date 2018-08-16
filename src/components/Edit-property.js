import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { required } from "../validators";
import Input from './Input';
import { editSelectedProperty, deleteProperty, fetchPropertyData, setSelectedProperty, clearSelectedProperty } from "../actions/protected-data";
import '../stylesheets/edit-property.css';

class EditProperty extends Component {
  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const initData = {
      name: this.props.selectedProperty.name,
      street: this.props.selectedProperty.street,
      city: this.props.selectedProperty.city,
      state: this.props.selectedProperty.state,
      zipcode: this.props.selectedProperty.zipcode,
      type: this.props.selectedProperty.type,
      thumbUrl: this.props.selectedProperty.thumbUrl,
      id: this.props.selectedProperty.id
    };

    this.props.initialize(initData);
  }

  onSubmit(values) {
    if (!values.thumbUrl) {
      values.thumbUrl =
        "https://github.com/mike-crane/dibs-client/blob/master/src/images/default-property.png?raw=true";
    }
    this.props.dispatch(editSelectedProperty(values));
    this.props.dispatch(fetchPropertyData());
    this.props.dispatch(setSelectedProperty(values, this.props.username));
    this.props.history.push("/reservations");
  }

  handleDeleteProperty(id, property) {
    this.props.dispatch(deleteProperty(id, property));
    this.props.dispatch(clearSelectedProperty());
    this.props.history.push("/reservations");
  }

  render() {
    return <div className="edit-property">
        <h2>Edit Property</h2>
        <form className="list-property" autoComplete="off" onSubmit={this.props.handleSubmit(
            values => this.onSubmit(values)
          )}>
          {/* <div className="form-section">
            <label htmlFor="name" className="address-name">
              Property name
            </label>
            <Field component={Input} type="text" name="name" id="name" validate={[required]} />
          </div> */}
          <h3>{this.props.selectedProperty.name}</h3>
          <fieldset>
            <legend>Property Address</legend>
            <div className="form-section">
              <label htmlFor="street" className="address-label">
                Street
              </label>
              <Field component={Input} type="text" name="street" id="street" validate={[required]} />
            </div>

            <div className="form-section">
              <label htmlFor="city" className="address-label">
                City
              </label>
              <Field component={Input} type="text" name="city" id="city" validate={[required]} />
            </div>

            <div className="form-section">
              <label htmlFor="state" className="address-label">
                State
              </label>
              <Field component={Input} type="text" name="state" id="state" validate={[required]} />
            </div>

            <div className="form-section">
              <label htmlFor="zipcode" className="address-label">
                Zip Code
              </label>
              <Field component={Input} type="text" name="zipcode" id="zipcode" validate={[required]} />
            </div>
          </fieldset>

          <div className="form-section">
            <label htmlFor="type" className="property-label">
              Property type
            </label>
            <Field name="type" component="select" validate={[required]}>
              <option />
              <option value="house" name="house">
                House
              </option>
              <option value="condo" name="condo">
                Condo
              </option>
              <option value="apartment" name="apartment">
                Apartment
              </option>
            </Field>
          </div>

          <div className="form-section">
            <label htmlFor="thumbUrl" className="property-photo">
              Image Url   <span>(optional)</span>
            </label>
            <Field component={Input} type="text" name="thumbUrl" />
          </div>

          <button className="save-property-button" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Save
          </button>
          <Link className="cancel-button" to="/reservations">
            Cancel
          </Link>
          <button className="delete-property-button" type="button" onClick={() => this.handleDeleteProperty(this.props.selectedProperty.id, this.props.properties)}>
            Delete Property
          </button>
        </form>
      </div>;
  }
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username,
  properties: state.protectedData.properties,
  selectedProperty: state.protectedData.selectedProperty
});

export default reduxForm({
  form: 'editProperty'
})(connect(mapStateToProps)(EditProperty));