import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './Login-form';
import Ribbon from './Ribbon';
import Footer from './Footer';
import '../stylesheets/landing.css';
import Feature1 from '../images/reservations.png';
import Feature2 from "../images/properties.png";
import Feature3 from '../images/dashboard.png';

export function Landing(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='home' role="main">
      <LoginForm />
      <div className="login-wrapper">
        <p>Not registered?</p> <Link to='/register'>Register</Link>
      </div>
      <div className="demo-wrapper">
        <p>For demo<br /><span>username:&nbsp;&nbsp;</span>dibs_demo<br /><span>password:&nbsp;&nbsp;</span>password123</p>
      </div>
      <Ribbon heading='Share a Property' subheading='Dibs helps you make the most of your family properties by providing a central system for listing properties and making them available for others to use.' />
      <div className="image-wrapper"><img src={Feature2} alt="" /></div>

      <Ribbon heading='Reserve a Property' subheading='Dibs makes it easy to reserve a property during a specified date, allowing you to make plans in advance.' />
      <div className="image-wrapper"><img src={Feature1} alt="" /></div>

      <Ribbon heading='See Property Availability' subheading='Dibs provides you with a simple and intuative interface with an integrated calendar that makes booking properties a breeze.' />
      <div className="image-wrapper"><img src={Feature3} alt="" /></div>
      
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);
