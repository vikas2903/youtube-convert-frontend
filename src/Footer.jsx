import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div id="footer">
        <Link to="/">Contact</Link>
        <Link to="/">Copyright Claims</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Tou</Link>
      </div>
    </div>
  );
}

export default Footer;
