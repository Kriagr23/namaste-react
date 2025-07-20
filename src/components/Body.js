import RestaurantCard from "./RestaurantCard";
import { CiSearch } from "react-icons/ci";
//import restaurantList from "../Utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //whenever state variable updates, react trigger a reconciliation cycle (rerenders the component)
  console.log("Body Rendered");
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const API_URL = process.env.REACT_APP_SWIGGY_API;
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await fetch(
      API_URL
    );
    const json = await data.json();
    console.log(json); // This is great for debugging!


    const restaurantList = json?.data?.cards
      .filter((c) => c?.card?.card?.info)
      .map((c) => c.card.card);

    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };

  if (listofRestaurants.length === 0) {
    return <Shimmer />; // Show shimmer effect while data is loading
  }
  return (
    <div className="body">

      <div className="filter-container">
        <div className="search">

          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);

          }} />
          <button onClick={() => {
            // Filter the restaurant list based on the search text and update UI

            console.log("Searching for:", searchText);
            const filteredRestaurants = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            (setFilteredRestaurants(filteredRestaurants));

          }}
            className="search-button">
            <CiSearch className="search-logo" /> Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList); // This ensures UI shows full list initially
          }}
        >
          <CiSearch className="filter-logo" />
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
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
