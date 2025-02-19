import { HeaderLogo } from "../utils/data";

const Header = () => {
    return (
      <header className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={HeaderLogo}
            alt="google"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </header>
    );
  };

export default Header;