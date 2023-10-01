import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStatusCheck from "../utils/useStatusCheck";

const Header = () => {
  const [login, setLogin] = useState("Log In");
  const checkStatus = useStatusCheck();

  return (
    <div>
      <div className="header">
        <Link to={"/"}>
          <img className="logo" src={LOGO_URL} alt="logo"></img>
        </Link>
        <ul className="nav-items">
          <li>
            <Link to={"/offers"} className="link">
              Offers
            </Link>
          </li>
          <li>
            <Link to={"/help"} className="link">
              Help
            </Link>
          </li>
          <li>Account info</li>
          <li>Cart</li>
          <li>
            <Link to={"/grocery"} className="link">
              Grocery
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              login === "Log In" ? setLogin("Log Out") : setLogin("Log In");
            }}
          >
            {login}
          </button>
          <li>Status: {checkStatus ? "💚" : "🧡"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
