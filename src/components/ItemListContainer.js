import ItemList from "./ItemList";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getProductByCategory } from "../app/services/productosApi";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    console.log("en el useEffect de ItemListContainer", catId);
    getProductos(catId);
  }, [catId]);

  async function getProductos(id) {
    let allProducts = id ? await getProductByCategory(id) : await getProduct();

    console.log("el valor de allProducts es: ", allProducts);
    setProductos(allProducts);
  }

  return (
    <>
      <h3>{greeting}</h3>
      <ItemList items={productos} />
    </>
  );
};

export default ItemListContainer;
