import React from "react";
import logo from "../imgs/logo.png";
function Logo() {
  return (
    <div className="col">
      <a className="navbar-brand" href="home.html">
        <img src={logo} alt="Logo" className="keybook-logo d-block" />
      </a>
    </div>
  );
}

export default Logo;
