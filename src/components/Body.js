import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return(
        <div className="body">
        <div className="filter">
            <button className="fltr-btn" 
            onClick={()=>
            {
                const filteredRestaurant=listOfRestaurants.filter((res)=>res?.data?.avgRating>4)
                setListOfRestaurants(filteredRestaurant)}} 
            >Top Rated Restaurants</button> 
            </div>
        <div className="res-container">
            {listOfRestaurants.map(restaurant=> <RestaurantCard  key={restaurant.data.id}resData={restaurant}/>)}
            </div>
        </div>
    )
    }
export default Body;