import { useState } from "react";
import { HeaderLogo } from "../utils/data";
import { Link } from "react-router-dom";
import useOnlineStatuus from "../utils/useOnlineStatuus";

const Header = () => {
  const [loginSwitch, setLoginSwitch] = useState("Login");
  const onlineStatus = useOnlineStatuus();

  return (
    <header className="flex justify-between">
      <div className="h-5">
        <img className="w-26" src={HeaderLogo} alt="google" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
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
