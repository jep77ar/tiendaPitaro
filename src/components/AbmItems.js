import { useEffect, useState } from "react";
import { getCategorias } from "../app/services/categoriasApi";
import { createProduct } from "../app/services/productosApi";

const AbmItems = () => {
  const [items, setItems] = useState([]);
  const [catId, setCatId] = useState("");
  const [catDesc, setCatDesc] = useState("");

  const searchApiByDesc = () => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + catDesc)
      .then((res) => res.json())
      .then((data) => {
        data.results.slice(0, 10).map((item) => {
          let newItem = {
            categoryId: catId,
            title: item.title,
            price: item.price,
            thumbnail: item.thumbnail,
            pictureUrl:
              "https://http2.mlstatic.com/D_NQ_NP_2X_" +
              item.thumbnail_id +
              "-F.webp",
            ////  id: item.id,
            description: item.title + " - $ " + item.price,
            stock: item.available_quantity,
          };

          setItems([...items, newItem]);

          createProduct(newItem);
        });
      });
  };

  const verProductosEnConsola = () => {
    console.log(items);
  };

  useEffect(() => {
    // muestro en consola para ver el id de la categoria de los items que estoy cargando en la pagina actual
    getCategorias().then((categoria) => {
      console.log(categoria);
    });
  }, []);

  return (
    <>
      <div>ABM de Items</div>

      <input
        type="text"
        onChange={(e) => setCatId(e.target.value)}
        placeholder="Id de la categoria"
      />
      <input
        type="text"
        onChange={(e) => setCatDesc(e.target.value)}
        placeholder="Descripcion de la categoria"
      />
      <button onClick={searchApiByDesc}>Busca y agrega en firebase</button>
      <br />

      <button onClick={verProductosEnConsola}>Mostrar items en consola</button>
    </>
  );
};

export default AbmItems;
