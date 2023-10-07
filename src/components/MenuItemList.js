import { useDispatch } from "react-redux";
import { RES_IMAGE_CDN } from "../utils/constants";
import { addCartItem } from "../utils/redux/cartSlice";

const MenuItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => dispatch(addCartItem(item));

  return (
    <div>
      {items.map((item) => (
        <div
          className="text-left border-t-2 border-slate-gray-900 flex justify-between py-2"
          key={item.card?.info?.id}
        >
          <div>
            <div className="mt-2">{item.card?.info.name}</div>
            <div className="mt-2 mb-5">
              {item.card?.info.price
                ? item.card?.info.price / 100
                : item.card?.info.defaultPrice / 100}
            </div>
          </div>
          <div className="relative">
            <img
              src={RES_IMAGE_CDN + item.card?.info?.imageId}
              className="w-[100px] h-[100px]"
            />
            <button
              className="absolute bottom-0 left-7 bg-black text-white p-1"
              onClick={() => handleClick(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
