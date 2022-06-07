import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../app/CartContext";
import { createCompra } from "../app/services/comprasApi";
import { updateCompraBatch } from "../app/services/productosApi";

const CartContainer = () => {
  const { carrito, removeItem, clear } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    console.log("contexto: ", carrito);
    mostrarCarritoEnTabla();
  }, [carrito]);

  const mostrarCarritoEnTabla = () => {
    let acumulaPrecio = +0;
    return (
      <div>
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

  const mostrarFormularioCompra = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" onChange={updateNombre} />
        <input type="text" placeholder="Telefono" onChange={updateTelefono} />
        <input type="text" placeholder="email" onChange={updateEmail} />
        <button type="submit">Comprar</button>
      </form>
    );
  };

  const eliminaItem = (id) => {
    removeItem(id);
  };

  const updateNombre = (e) => {
    setNombre(e.target.value);
  };

  const updateTelefono = (e) => {
    setTelefono(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || telefono === "" || email === "") {
      alert("Todos los datos del comprador son obligatorios");
      return;
    }

    armarCompra();
  };

  const armarCompra = async () => {
    let buyer = {
      name: nombre,
      phone: telefono,
      email: email,
    };

    let montoTotal = +0;
    let compra = carrito.map((item) => {
      //TODO debe verificar si hay stock de este item y actualizarlo descontando lo q se esta comprando

      montoTotal = montoTotal + item.price * item.quantity;
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      };
    });

    let fecha = new Date().toLocaleDateString();
    console.log("compra", { items: compra, buyer, fecha, total: montoTotal });

    await updateCompraBatch(carrito);

    let orderId = await createCompra({
      items: compra,
      buyer,
      fecha,
      total: montoTotal,
    });
    alert(`Compra realizada con exito, numero de orden: ${orderId}`);

    clear();
    navigate("/");
  };

  return (
    <>
      <div>
        <h4>Contenido del carrito</h4>
        <div>{mostrarCarritoEnTabla()}</div>
      </div>
      <div className="formCompra">
        <h4>Datos del comprador</h4>
        <div>{mostrarFormularioCompra()}</div>
      </div>
    </>
  );
};

export default CartContainer;
