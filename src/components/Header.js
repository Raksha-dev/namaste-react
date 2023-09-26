import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState("Log In");

  return (
    <div>
      <div className="header">
        <img className="logo" src={LOGO_URL} alt="logo"></img>
        <ul className="nav-items">
          <li>Offers</li>
          <li>Help</li>
          <li>Account info</li>
          <li>Cart</li>
          <button
            className="login"
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
