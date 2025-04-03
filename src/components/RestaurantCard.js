import { CDN_url } from "../utils/data";

const RestaurantCard = (props) => {
  const { resData } = props;

  // console.log("resData", resData);
  
  // destructure the data from the props
  const { cloudinaryImageId, name, cuisines, locatily, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="m-2 p-2 w-72 h-150 bg-white shadow-lg rounded-lg hover:shadow-amber-500 transition-shadow duration-300">
      <img
        className="origin-center w-full h-64 object-fit"
        src={CDN_url + cloudinaryImageId}
        alt="google"
      />
      <div className="res-card-details p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <p>{cuisines?.join(", ")}</p>
        <p>{locatily}</p>
        <p>{costForTwo}</p>
        <p>{avgRating}</p>
      </div>
    </div>
  );
};

// higher order component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
