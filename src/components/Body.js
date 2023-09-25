import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react/cjs/react.development";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  // const searchItems = (nameKey, myArray) => {
  //   for (let i = 0; i < myArray.lenth; i++) {
  //     if (myArray[i] === nameKey) {
  //       return myArray[i];
  //     }
  //   }
  // };
  return (
    <div>
      <div className="res-btn-section">
        <h2 className="res-heading">Top restaurant chains in Bangalore</h2>
        {/* <input
          placeholder="Search"
          className="search"
          onMouseEnter={() => {searchItems()}}
        ></input> */}
        <button
          className="res-filter-btn"
          onClick={() => {
            const filteredItems = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredItems);
            console.log(filteredItems);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-cards">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
