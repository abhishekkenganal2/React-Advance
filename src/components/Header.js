const Header = () => {
    return (
      <header className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://dvm9jp3urcf0o.cloudfront.net/logo-ideas/business-logo-ideas/Pro/food-delivery-business.png"
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