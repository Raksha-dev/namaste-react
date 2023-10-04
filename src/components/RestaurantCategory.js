import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const items = () => {
    setShowIndex(!showItems);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Accordion header */}
      <div className="flex justify-between pb-[20] font-bold" onClick={items}>
        {data.title} ({data.itemCards.length})<span>🔽</span>
      </div>
      {/* Accordion body */}
      {showItems && <MenuItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
