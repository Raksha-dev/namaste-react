import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStatusCheck from "../utils/useStatusCheck";

const Header = () => {
  const [login, setLogin] = useState("Log In");
  const checkStatus = useStatusCheck();

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
          <li className="mr-2">Cart</li>
          <li className="mr-2">
            <Link to={"/grocery"} className="link">
              Grocery
            </Link>
          </li>
          <button
            onClick={() => {
              login === "Log In" ? setLogin("Log Out") : setLogin("Log In");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
