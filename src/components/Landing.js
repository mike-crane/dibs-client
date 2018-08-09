import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './Login-form';
import Ribbon from './Ribbon';
import Footer from './Footer';
import '../stylesheets/landing.css';
import Placeholder from '../images/img-placeholder.png';

export function Landing(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='home'>
      <LoginForm />
      <Link to='/register'>Register</Link>
      <Ribbon heading='Share a Property' 
              subheading='Dibs helps you make the most of your family properties by providing a central system for listing properties and making them available for others to use.'
              image={<img src={Placeholder} alt='placeholder' />} />
      <Ribbon heading='See property availability' 
              subheading='Dibs provides you with a simple and intuative interface with an integrated calendar that makes booking properties a breeze.'
              image={<img src={Placeholder} alt='placeholder' />} />
      <Ribbon heading='Reserve an property' 
              subheading='Dibs makes it easy to reserve a property during a specified date, allowing you to make plans in advance.'
              image={<img src={Placeholder} alt='placeholder' />} />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);
