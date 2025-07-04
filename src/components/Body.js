import RestaurantCard from "./RestaurantCard";
import { CiSearch } from "react-icons/ci";
import restaurantList from "../Utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          <CiSearch className="filter-logo" />
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
