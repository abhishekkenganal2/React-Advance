import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestoMenu from "../utils/useRestoMenu";
import { CDN_url } from "../utils/data";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestoMenu(resId); 

  if (resInfo === null) {
    return (
      <div style={{ margin: 30 }}>
        <Shimmer />
      </div>
    );
  }

  console.log(resInfo)
  // console.log(resInfo[2].card.card.info)
  const { name, cuisines, costForTwoMessage } = resInfo[2]?.card?.card?.info;
  const { itemCards } = resInfo[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(itemCards)
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <div key={item.card.info.id} style={{border:"1px solid black", margin:"10px", width:"auto", display:"flex", borderRadius:"10px"}}>
            <img src={CDN_url + item.card.info.imageId} style={{width:"24%", height:"200px", margin:"0 10px"}}/>
            <h2>{item.card.info.name} - </h2> 
            <h2>- Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
