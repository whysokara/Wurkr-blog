import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-left">
          <p className="logo">Wurkr</p>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className="navbar-menu-item">Home</li>
            <li className="navbar-menu-item active">Blog</li>
            <li className="navbar-menu-item">Connect!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
