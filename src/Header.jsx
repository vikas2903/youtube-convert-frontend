import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.svg'

function Header() {
  return (
    <>
      <header className="navlink">
        <Link to="/">Home</Link>
        <Link to="faq">Faq</Link>
        <Link to="/">Services</Link>
        <Link to="/changelog">Changelog</Link>
      </header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </>
  );
}

export default Header;
