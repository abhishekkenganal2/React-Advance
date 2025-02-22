import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/data";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(restaurants);

  return (
    <div className="body">
      <div className="filter-search">
        <input type="text" placeholder="Search for restaurants" />
        <button className="search-btn">Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            setResList(resList.filter((res) => res.info.avgRating > 4.5));
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((data) => (
          <RestaurantCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
