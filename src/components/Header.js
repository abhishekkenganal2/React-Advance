import { useState, useContext } from "react";
import { HeaderLogo } from "../utils/data";
import { Link } from "react-router-dom";
import useOnlineStatuus from "../utils/useOnlineStatuus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginSwitch, setLoginSwitch] = useState("Login");
  const onlineStatus = useOnlineStatuus();

 const {loggedInUser} = useContext(UserContext)

 // Subscribing to the store using a Selector hook... 
 const cartItems = useSelector((store) => store.cart.items)

//  console.log("cartItems:",cartItems)

  return (
    <header className="flex w-full bg-white items-center justify-between shadow-md">
      <div className="logo-container">
        <img className="logo" src={HeaderLogo} alt="google" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>
          <li><Link to="/about" style={{textDecoration:'none'}}>About Us</Link></li>
          <li><Link to="/contact" style={{textDecoration:'none'}}>Contact Us</Link></li>
          <li className="font-bold">Cart - ({cartItems.length} items)</li>
          <button className="border-0 rounded-md px-3"
            onClick={() => {
              loginSwitch === "Login"
                ? setLoginSwitch("Logout")
                : setLoginSwitch("Login")
            }}
          >
            {loginSwitch}
          </button>
          <li style={{fontWeight:'bold'}}>{loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
