import { useState } from "react";
import { HeaderLogo } from "../utils/data";

const Header = () => {
  const [loginSwitch, setLoginSwitch] = useState("Login");

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={HeaderLogo} alt="google" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
