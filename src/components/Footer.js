import React from "react";
import Logo from "../images/logo_small.svg";
import "../stylesheets/footer.css";

const Footer = props => {
  return (
    <div className="footer">
      <footer>
        <img src={Logo} alt="Dibs logo" />
      </footer>
    </div>
  );
};

export default Footer;
