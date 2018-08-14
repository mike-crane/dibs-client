import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import '../stylesheets/login-form.css';

class LoginForm extends Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
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
    return (
      <form className='login-form' autoComplete="off" onSubmit={this.props.handleSubmit(
          values => this.onSubmit(values)
        )}>
        {error}
        <h2>Start Calling Dibs Now</h2>
        <div className='login-form-section'>
          <label htmlFor='username'>Username</label>
          <Field component={Input} type='text' name='username' id='username' autoComplete='off' validate={[required, nonEmpty]} />
          <label htmlFor='password'>Password</label>
          <Field component={Input} type='password' name='password' id='password' autoComplete='off' validate={[required, nonEmpty]} />
        
          <button className='login-button' disabled={this.props.pristine || this.props.submitting}>
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
