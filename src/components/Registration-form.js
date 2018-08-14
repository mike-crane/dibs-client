import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './Input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import '../stylesheets/registration-form.css';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

class RegistrationForm extends Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className='login-form' autoComplete="off"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <div className='registration-form-section'>
          <label htmlFor='firstName'>First name</label>
          <Field component={Input} type='text' name='firstName' autoComplete='off' />
          <label htmlFor='lastName'>Last name</label>
          <Field component={Input} type='text' name='lastName' autoComplete='off' />
          <label htmlFor='username'>Username</label>
          <Field
            component={Input}
            type='text'
            name='username' 
            autoComplete='off'
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor='password'>Password</label>
          <Field
            component={Input}
            type='password'
            name='password'
            validate={[required, passwordLength, isTrimmed]}
          />
          <label htmlFor='passwordConfirm'>Confirm password</label>
          <Field
            component={Input}
            type='password'
            name='passwordConfirm'
            validate={[required, nonEmpty, matchesPassword]}
          />
          <button className='register-button' 
            type='submit'
            disabled={this.props.pristine || this.props.submitting}>
            Register
          </button>
        </div>

      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);