import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import getItems from "./../services/apiProducts";
import { useEffect, useState } from "react";

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
  },[]);

  async function getProductos() {
      let allProducts = await getItems();
      console.log("el valor de allProducts es: ", allProducts)
      setProductos( allProducts );
  }

    let agregaAlCarro = (valor) => {
    console.log("Se agregó en el carrito la siguiente cantidad: ", valor )
  }

  return (
    <>
      <h3>{greeting}</h3>
      <ItemList items={productos} />
      <ItemCount stock = "10" initial = "1" onAdd={agregaAlCarro}/>
    </>
  );

}

export default ItemListContainer;