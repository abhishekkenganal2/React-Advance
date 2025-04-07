import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import { restaurants } from "../utils/data";
import { useEffect, useState, useContext } from "react";
import {Shimmer} from "./Shimmer";
import { Body_API } from "../utils/data";
import { Link } from "react-router-dom";
import useOnlineStatuus from "../utils/useOnlineStatuus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const onlineStatus = useOnlineStatuus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  useEffect(() => {
    fetchData();
  }, []);

  const { setUserName, loggedInUser } = useContext(UserContext);

  if (onlineStatus === false)
    return <h2>Seems you are offine, retry when you are online...!!!</h2>;

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
          className="border-2 p-1 rounded-md"
        />
        <button
          className="bg-orange-300 border-l-purple-600 rounded-md px-3"
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
          className="filter-btn border-1 px-3 rounded-md bg-amber-400"
          onClick={() => {
            setFilteredList(resList.filter((res) => res.info.avgRating > 4.5));
          }}
        >
          Top rated Restaurants
        </button>
        <div>
          <label>UserName:</label>
          <input
            className="border-2 mx-2 p-1 rounded-md"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      {resList.length <= 0 || filteredList.length <= 0 ? (
        <div style={{ margin: 30 }}>
          <Shimmer />
        </div>
      ) : (
        <div className="res-container">
          {filteredList.map((data) => (
            <Link
              key={data.info.id}
              to={"/restaurant/" + data.info.id}
              style={{ textDecoration: "none", color: "black", width: "22%" }}
            >
              {data.info.promoted ? (
                <RestaurantCardPromoted resData={data} />
              ) : (
                <RestaurantCard resData={data} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
