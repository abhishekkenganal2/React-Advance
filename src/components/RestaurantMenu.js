import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/data";

const RestaurantMenu = () => {
  [resInfo, setResInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API + id);

    const json = await data.json();

    // console.log("json:", json?.data?.cards);
    setResInfo(json.data.cards);
  };

  if (resInfo === null) {
    return (
      <div style={{ margin: 30 }}>
        <Shimmer />
      </div>
    );
  }

  // console.log(resInfo[2].card.card.info)
  const { name, cuisines, costForTwoMessage } = resInfo[2]?.card?.card?.info;

  const { itemCards } =
    resInfo[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
