import ItemList from "./ItemList";
import getItems from "./../services/apiProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);
  const { catId }  = useParams();

  useEffect(() => {
    getProductos(catId);
  },[catId]);

  async function getProductos(id) {
      let allProducts = await getItems(id);
      console.log("el valor de allProducts es: ", allProducts)
      setProductos( allProducts );
  }

  return (
    <>
      <h3>{greeting}</h3>
      <ItemList items={productos} />
    </>
  );

}

export default ItemListContainer;