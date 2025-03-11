import { useState } from "react";
import { HeaderLogo } from "../utils/data";
import { Link } from "react-router-dom";
import useOnlineStatuus from "../utils/useOnlineStatuus";

const Header = () => {
  const [loginSwitch, setLoginSwitch] = useState("Login");
  const onlineStatus = useOnlineStatuus();

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={HeaderLogo} alt="google" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
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
