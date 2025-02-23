import RestaurantCard from "./RestaurantCard";
// import { restaurants } from "../utils/data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList,setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.960059122809971&lng=77.57337538383284&str=haldiram%27s%20restaurant&trackingId=9c438575-3bf9-4374-872e-ac769c08a6f4&submitAction=ENTER&queryUniqueId=4bbca8c1-74c3-e658-f254-9e77fa9b673e"
    );

    const Json = await data.json();

    // console.log(
    //   Json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
    //     ?.card?.card?.restaurants
    // );
    // Optional Chaining
    setResList(
      Json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    );
    setFilteredList(Json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
      ?.card?.card?.restaurants)
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
            console.log(filterData);

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
      {resList.length === 0 || filteredList.length === 0  ? (
        <div style={{ margin: 30 }}>
          <Shimmer />
        </div>
      ) : (
        <div className="res-container">
          {filteredList.map((data) => (
            <RestaurantCard key={data.info.id} resData={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
