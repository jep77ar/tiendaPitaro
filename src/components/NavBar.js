import { NavLink } from "react-router-dom";
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import "./../app/App.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <Brand />
      <div>
        <NavLink className="categoria" to="/category/1">
          Cat. 1
        </NavLink>
        <NavLink className="categoria" to="/category/2">
          Cat. 2
        </NavLink>
        <NavLink className="categoria" to="/category/3">
          Cat. 3
        </NavLink>
      </div>

      <CartWidget />
    </div>
  );
};

export default NavBar;
