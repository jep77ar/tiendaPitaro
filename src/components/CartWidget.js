import { BsCart4 } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../app/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { carrito } = useContext(CartContext);
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    console.log("carrito en cart: ", carrito);
    let cant = +0;
    carrito.forEach((item) => {
      cant += Number(item.quantity);
    });
    setCantItems(cant);
  }, [carrito]);

  return (
    <NavLink to="/cart">
      <div className="cartWidget">
        <IconContext.Provider
          value={{ size: "60px", className: "cartWidgetIcon" }}
        >
          <div>
            <BsCart4 />
          </div>
        </IconContext.Provider>
        <h2>{cantItems}</h2>
      </div>
    </NavLink>
  );
};

export default CartWidget;
