import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/data";

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search for restaurants" />
          <button>Search</button>
        </div>
        <div className="res-container">
          {restaurants.map((data) => (
            <RestaurantCard key={data.info.id} resData={data}/>
          ))}
        </div>
      </div>
    );
  };

export default Body;