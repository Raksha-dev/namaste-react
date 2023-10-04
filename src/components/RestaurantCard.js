import { RES_IMAGE_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  return (
    <div className="p-2">
      <img
        className="h-[300px] w-[100%] object-cover"
        src={RES_IMAGE_CDN + cloudinaryImageId}
        alt="KFC"
      />
      <div className="py-5">
        <h3 className="font-bold text-gray-50">{name}</h3>
        <h3 className="text-gray-50">{cuisines.join(", ")}</h3>
        <h3 className="text-gray-50">{avgRating}</h3>
        <h3 className="text-gray-50">{costForTwo}</h3>
        <h3 className="text-gray-50">{resData.info.sla.deliveryTime} minuts</h3>
      </div>
    </div>
  );
};

export const HighRatedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-50 top-2 px-1 rounded-md left-[-4px]">
          Best restaurant
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
