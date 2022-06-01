import { useEffect, useState } from "react";
import {
  createCategoria,
  deleteCategoria,
  getCategorias,
} from "../app/services/categoriasApi";

const AbmCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [cat, setCat] = useState("");

  useEffect(() => {
    getCategorias().then((categorias) => {
      setCategorias(categorias);
    });
  }, []);

  const agregar = () => {
    console.log("agregando categoria");
    let newCat = {
      nombre: cat,
    };
    createCategoria(newCat);
  };

  const eliminar = (idCat) => {
    console.log("eliminando categoria", idCat);
    deleteCategoria(idCat);
  };

  const verCatEnConsola = () => {
    console.log("categorias", categorias);
  };

  return (
    <>
      <div>
        <h1>AbmCategorias</h1>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCat(e.target.value)}
          placeholder="Nombre de la categoria"
        />

        <button onClick={() => agregar()}>Agregar</button>
      </div>
      <br />
      {categorias.map((categoria) => {
        return (
          <div className="abmCategorias" key={categoria.id}>
            <div>{categoria.nombre}</div>

            <button onClick={() => eliminar(categoria.id)}>Eliminar</button>

            <div>{categoria.id}</div>
          </div>
        );
      })}

      <br />
      <button onClick={verCatEnConsola}>Ver categorias en consola</button>
    </>
  );
};

export default AbmCategorias;
