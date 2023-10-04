import { RES_IMAGE_CDN } from "../utils/constants";

const MenuItemList = ({ items }) => {
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
          <img
            src={RES_IMAGE_CDN + item.card?.info?.imageId}
            className="w-[100px] h-[100px]"
          />
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
