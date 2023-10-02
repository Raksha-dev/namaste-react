import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatusCheck from "../utils/useStatusCheck";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const checkStatus = useStatusCheck();

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
  };

  if (checkStatus === false)
    return <h1>Please check your internet connection 🥪</h1>;

  // conditional rendering
  return listOfRestaurant === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-between my-4 px-20">
        <div className="flex items-center">
          <h2 className="font-medium text-3xl">Top restaurant chains in Bangalore</h2>
          <div>
            <input
              className="border-solid border-2 rounded-md border-gray-500 ml-4"
              type={"text"}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="bg-slate-400 ml-2 p-1 rounded-md text-gray-50"
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
          className="bg-slate-400 ml-2 p-2 rounded-md text-gray-50"
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
      <div className="px-20 grid grid-cols-4 gap-5">
        {filterdRestaurant.length < 1 ? (
          <h1>No results</h1>
        ) : (
          <>
            {filterdRestaurant.map((restaurant, i) => (
              <Link
              className="bg-slate-400"
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
