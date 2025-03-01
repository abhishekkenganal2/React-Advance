import RestaurantCard from "./RestaurantCard";
// import { restaurants } from "../utils/data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Body_API } from "../utils/data";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Body_API);

    const Json = await data.json();

    // Optional Chaining
    setResList(
      Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter-search">
        <input
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterData = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(filterData);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(resList.filter((res) => res.info.avgRating > 4.5));
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      {resList.length <= 0 || filteredList.length <= 0 ? (
        <div style={{ margin: 30 }}>
          <Shimmer />
        </div>
      ) : (
        <div className="res-container">
          {filteredList.map((data) => (
            <Link key={data.info.id} to={"/restaurant/" + data.info.id} style={{ textDecoration: "none",color:"black",width:"22%" }}>
              <RestaurantCard resData={data} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
