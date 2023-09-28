import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.917882&lng=77.612761&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  // conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="res-btn-section">
        <div className="search-filter">
          <h2 className="res-heading">Top restaurant chains in Bangalore</h2>
          <div>
            <input
              className="input"
              type={"text"}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search"
              onClick={() => {
                const filteredSearch = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText)
                );
                setFilterdRestaurant(filteredSearch);
              }}
            >
              Search
            </button>
          </div>
        </div>
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
        {filterdRestaurant.length < 1 ? (
          <h1>No results</h1>
        ) : (
          <>
            {filterdRestaurant.map((restaurant, i) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
