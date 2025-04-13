import {AccordianShimmer, Shimmer} from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestoMenu from "../utils/useRestoMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestoMenu(resId);

  console.log("resId:",resId)

  const [showIndex, setShowIndex] = useState(null);

  const { name, cuisines, costForTwoMessage } = resInfo[2]?.card?.card?.info;

  console.log("cuisines",cuisines)

  const categories = resInfo[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log("categories",categories.length)

  if (resInfo === null) {
    return (
      <div style={{margin: "0 200px",justifyContent:"center"}}>
        <AccordianShimmer categories={categories.length}/>
      </div>
    );
  }

  return (
    <div className="menu p-4">
      <h1 className="text-xl font-bold">{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() =>
            !showIndex ? setShowIndex(index) : setShowIndex(!index)
          }
        />
      ))}
      {/* <ul>
        {itemCards.map((item) => (
          <div key={item.card.info.id} style={{border:"1px solid black", margin:"10px", width:"auto", display:"flex", borderRadius:"10px"}}>
            <img src={CDN_url + item.card.info.imageId} style={{width:"24%", height:"200px", margin:"0 10px"}}/>
            <h2>{item.card.info.name} - </h2> 
            <h2>- Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h2>
          </div>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
