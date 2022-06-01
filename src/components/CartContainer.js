import { useContext, useEffect } from "react";
import { CartContext } from "../app/CartContext";

const CartContainer = () => {
  const { carrito, removeItem, clear } = useContext(CartContext);

  useEffect(() => {
    console.log("contexto: ", carrito);
    mostrarCarritoEnTabla();
  }, [carrito]);

  const mostrarCarritoEnTabla = () => {
    let acumulaPrecio = +0;
    return (
      <div>
        <h1>Contenido del carrito</h1>
        <br />
        <table className="tablaCarrito">
          <thead>
            <tr>
              <th>Item</th>
              <th>Precio unidad</th>
              <th>Cantidad</th>
              <th>Precio cantidad</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => {
              let subTotalItem = item.quantity * item.price;
              acumulaPrecio = acumulaPrecio + subTotalItem;
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{subTotalItem}</td>
                  <td>
                    <button onClick={() => eliminaItem(item.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {
          <div className="precioTotal">
            Total a pagar: $ <b>{acumulaPrecio}</b>
          </div>
        }
        <br />
        <button onClick={() => clear()}>Vaciar carrito</button>
      </div>
    );
  };

  const eliminaItem = (id) => {
    removeItem(id);
  };

  return <div>{mostrarCarritoEnTabla()}</div>;
};

export default CartContainer;
