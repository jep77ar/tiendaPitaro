import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../app/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { carrito, addItem } = useContext(CartContext);

  let agregaAlCarro = (valor) => {
    setQuantityToAdd(valor);

    addItem(item, valor);
    console.log("agregando al carro: ", valor, carrito, item);
  };

  let terminarCompra = () => {
    console.log(
      "Se termina la compra con la siguente cant de items: ",
      quantityToAdd
    );
  };

  return (
    <div className="itemDetail">
      <div>
        Detalle: <b>{item.title}</b>
      </div>
      <p>{item.description}</p>
      <div>
        <img alt="algo" src={item.pictureUrl} />
      </div>
      <div>
        Precio: ${item.price} - Stock: <b>{item.stock}</b>
      </div>
      {quantityToAdd === 0 ? (
        <ItemCount stock={item.stock} initial="1" onAdd={agregaAlCarro} />
      ) : (
        <NavLink to="/cart">
          <button className="btnAgregarCarro" onClick={terminarCompra}>
            Terminar compra
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default ItemDetail;
