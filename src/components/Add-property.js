import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
// import Input from './Input';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import '../stylesheets/edit-property.css';

class AddProperty extends Component {
  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className='form-error' aria-live='polite'>
          {this.props.error}
        </div>
      );
    }
    return <div className="new-property">
        <h2>New Propery</h2>
        <form className="list-property" onSubmit={this.props.handleSubmit(
            values => this.onSubmit(values)
          )}>
          {error}

          <div className="form-section">
            <label htmlFor="property-name" className="address-name">
              Property name
            </label>
            <Field component="input" type="text" name="property-name" id="property-name" validate={[required, nonEmpty]} />
          </div>

          <fieldset>
            <legend>Property Address</legend>
            <div className="form-section">
              <label htmlFor="street" className="address-label">
                Street
              </label>
              <Field component="input" type="text" name="street" id="street" validate={[required, nonEmpty]} />
            </div>

            <div className="form-section">
              <label htmlFor="city" className="address-label">
                City
              </label>
              <Field component="input" type="text" name="city" id="city" validate={[required, nonEmpty]} />
            </div>

            <div className="form-section">
              <label htmlFor="state" className="address-label">
                State
              </label>
              <Field component="input" type="text" name="state" id="state" validate={[required, nonEmpty]} />
            </div>

            <div className="form-section">
              <label htmlFor="zipcode" className="address-label">
                Zip Code
              </label>
              <Field component="input" type="text" name="zipcode" id="zipcode" validate={[required, nonEmpty]} />
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
            {/* <Field name="property-photo" component="input" type="file" onChange={this.fileSelectedHandler} /> */}
          </div>

          <button className="save-property-button" disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
          <Link className="cancel-button" to="/reservations">
            Cancel
          </Link>
        </form>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    properties: state.protectedData.properties,
    selectedProperty: state.protectedData.selectedProperty 
  };
};

export default reduxForm({
  form: 'add-property',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add-property', Object.keys(errors)[0]))
})(connect(mapStateToProps)(AddProperty));
