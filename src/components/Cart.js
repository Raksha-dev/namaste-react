import MenuItemList from "./MenuItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItem } from "../utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCartItem());
  };

  return (
    <div className="text-center text-2xl font-bold border-t-2 border-slate-gray-900 w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between">
        <h1>Cart</h1>
        <button onClick={handleClearCart}>Clear cart</button>
      </div>
      <MenuItemList items={cartItems} />
    </div>
  );
};

export default Cart;
