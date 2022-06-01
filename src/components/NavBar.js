import { NavLink } from "react-router-dom";
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import "./../app/App.css";
import { useEffect, useState } from "react";
import { getCategorias } from "../app/services/categoriasApi";

const NavBar = () => {
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

      <CartWidget />
    </div>
  );
};

export default NavBar;
