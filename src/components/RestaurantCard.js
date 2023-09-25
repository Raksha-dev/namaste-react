import { RES_IMAGE_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  return (
    <div className="res-card-container">
      <img
        className="res-card-image"
        src={RES_IMAGE_CDN + cloudinaryImageId}
        alt="KFC"
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{resData.info.sla.deliveryTime} minuts</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
