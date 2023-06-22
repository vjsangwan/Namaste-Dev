 import {CDN_URL} from "../utils/constants";
 const RestaurantCard = (props)=>{
    const {resData}=props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime}=resData?.data;

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img alt='res-logo' className="res-img" src={CDN_URL+cloudinaryImageId}/>
            <h5>{name}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo/100} FOR TWO</h5>
            <h5>{deliveryTime} minutes</h5>
         </div>
    );
 }
 export default RestaurantCard;