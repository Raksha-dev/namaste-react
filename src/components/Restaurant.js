import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurant = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState();

  const setShowIndexProp = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name } = resInfo?.cards[0]?.card?.card?.info;

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="px-[100px] my-[20px] text-center">
      <h1 className="mb-4 font-bold text-4xl">{name}</h1>
      {category.map((category, index) => (
        // Controlled component
        <RestaurantCategory
          data={category?.card?.card}
          key={index}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndexProp(index)}
        />
      ))}
    </div>
  );
};

export default Restaurant;
