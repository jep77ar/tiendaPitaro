import { NavLink } from "react-router-dom";
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import "./../app/App.css";
import { useContext, useEffect, useState } from "react";
import { getCategorias } from "../app/services/categoriasApi";
import { CartContext } from "../app/CartContext";

const NavBar = () => {
  const { carrito } = useContext(CartContext);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias().then((categoria) => {
      setCategorias(categoria);
    });
  }, []);

  return (
    <div className="navBar">
      <Brand />
      <div>
        {categorias.map((categoria) => (
          <NavLink
            key={categoria.id}
            className="categoria"
            to={"/category/" + categoria.id}
          >
            {categoria.nombre}
          </NavLink>
        ))}
      </div>
      {carrito && carrito.length > 0 && <CartWidget />}
    </div>
  );
};

export default NavBar;
