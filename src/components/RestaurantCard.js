const RestaurantCard = (props) => {
    const {resData} = props;
    const {img,name,location,rating,price} = resData
   
    console.log(resData)
   
     return (
       <div className="res-card">
         <img className="res-logo" src={img} alt="google" />
         <div className="res-card-details">
           <h2>{name}</h2>
           <p>{location}</p>
           <p>{rating}</p>
           <p>{price}</p>
         </div>
       </div>
     );
   };

   export default RestaurantCard;