import { useState } from "react";
import { HeaderLogo } from "../utils/data";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginSwitch, setLoginSwitch] = useState("Login");

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={HeaderLogo} alt="google" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login"
            onClick={() => {
              loginSwitch === "Login"
                ? setLoginSwitch("Logout")
                : setLoginSwitch("Login")
            }}
          >
            {loginSwitch}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
