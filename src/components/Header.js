import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useStatusCheck from "../utils/useStatusCheck";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Header = () => {
  const [login, setLogin] = useState("Log In");
  const checkStatus = useStatusCheck();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-100 shadow-md px-20">
        <Link to={"/"}>
          <img className="w-20" src={LOGO_URL} alt="logo"></img>
        </Link>
        <ul className="flex">
          <li className="mr-2">Status: {checkStatus ? "💚" : "🧡"}</li>
          <li className="mr-2">
            <Link to={"/offers"} className="link">
              Offers
            </Link>
          </li>
          <li className="mr-2">
            <Link to={"/help"} className="link">
              Help
            </Link>
          </li>
          <li className="mr-2">Account info</li>
          <li className="mr-2">
            <Link to={"/Cart"} className="link">
              Cart - {cartItems.length}
            </Link>
          </li>
          <li className="mr-2">
            <Link to={"/grocery"} className="link">
              Grocery
            </Link>
          </li>
          <button
            className="mr-2"
            onClick={() => {
              login === "Log In" ? setLogin("Log Out") : setLogin("Log In");
            }}
          >
            {login}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
