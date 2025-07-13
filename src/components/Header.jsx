import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img className="nav-logo" src="/src/assets/react.svg" alt="React Logo" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
