import { CDN_url } from "../utils/data";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, locatily, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_url + cloudinaryImageId}
        alt="google"
      />
      <div className="res-card-details">
        <h2>{name}</h2>
        <p>{cuisines?.join(", ")}</p>
        <p>{locatily}</p>
        <p>{costForTwo}</p>
        <p>{avgRating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
