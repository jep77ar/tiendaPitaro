import { createContext, useState } from "react";

const TiendaProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addItem = (newItem, quantity) => {
    console.log("en addItem: ", newItem, quantity);
    if (isInCart(newItem.id)) {
      console.log("en addItem: ya esta en el carrito");
      alert(`El item ${newItem.title} ya está en el carrito`);
      return;
    }

    !carrito.find((item) => item.id === newItem.id) &&
      setCarrito([...carrito, { ...newItem, quantity }]);

    console.log("saliendo de addItem: ", carrito);
  };

  const removeItem = (itemId) => {
    console.log("en removeItem: ", itemId);

    setCarrito(carrito.filter((item) => item.id !== itemId));
  };

  const clear = () => {
    console.log("en clear");
    setCarrito([]);
  };

  const isInCart = (itemId) => {
    console.log("en isInCart: ", itemId);
    return carrito.find((item) => item.id === itemId) ? true : false;
  };

  return (
    <CartContext.Provider
      value={{ carrito, setCarrito, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default TiendaProvider;
export const CartContext = createContext();
