import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div>
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo"></img>
      <ul className="nav-items">
        <li>Search</li>
        <li>Offers</li>
        <li>Help</li>
        <li>Account info</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
