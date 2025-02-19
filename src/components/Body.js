import RestaurantCard from "./RestaurantCard";
import { restuNames } from "../utils/data";

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search for restaurants" />
          <button>Search</button>
        </div>
        <div className="res-container">
          {restuNames.map((data) => (
            <RestaurantCard key={data.id} resData={data}/>
          ))}
        </div>
      </div>
    );
  };

export default Body;