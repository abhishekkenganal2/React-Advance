const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,locatily,costForTwo,avgRating} = resData?.info;
   
    console.log(resData?.info)
   
     return (
       <div className="res-card">
         <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="google" />
         <div className="res-card-details">
           <h2>{name}</h2>
           <p>{cuisines.join(", ")}</p>
           <p>{locatily}</p>
           <p>{costForTwo}</p>
           <p>{avgRating}</p>
         </div>
       </div>
     );
   };

   export default RestaurantCard;