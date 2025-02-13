import React from "react";
import ReactDom from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello World!"),
//     React.createElement("h2", {}, "Hello I am H2!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hello World!2"),
//     React.createElement("h2", {}, "Hello I am H2!2"),
//   ]),
// ]);
// Introduction to JSX and Babel
// const jsxheading = <h1>Hello World!</h1> // JSX for single element
// const jsx = (
//   <div>
//     <h1>Hello World!</h1>
//     <h2>Hello I am You</h2>
//   </div>
// ); // JSX for multiple element

// New project:-
// layoout
//  - header
//   - logo
//   - nav-items
//  - body
//   - Search
//   - RestaurantContainer
//   - RestaurentCard
// - Image
// - NAme of Restaurant, Star rating, Location, Price, delevary time
//  - Footer
//   - Copyright
//   - Links
//   - Address
//   - Contact

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

const RestaurantCard = ({ restImg, RestuName, location, rating, price }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={restImg} alt="google" />
      <div className="res-card-details">
        <h2>{RestuName}</h2>
        <p>{location}</p>
        <p>{rating}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

const restuNames = [
  {
    id: "001",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    name: "Meghana Shop",
    location: "Chennai",
    rating: 5,
    price: 230,
  },
  {
    id: "002",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
    name: "Mysore Resto",
    location: "Bangalore",
    rating: 4,
    price: 150,
  },
  {
    id: "003",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ntjshqsv2k7vxtv7vmib",
    name: "Bijapur Resto",
    location: "Bijapur",
    rating: 3,
    price: 100,
  },
  {
    id: "004",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750225.JPG",
    name: "Kamat Resto",
    location: "Bangalore",
    rating: 4,
    price: 200,
  },
  {
    id: "005",
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gjcslopkyvnsc1gjjguq",
    name: "Kantu Tea Stall",
    location: "Bangalore",
    rating: 5,
    price: 20,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {restuNames.map((data) => (
          <RestaurantCard
            restImg={data.img}
            RestuName={data.name}
            location={data.location}
            rating={data.rating}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
