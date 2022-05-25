import { useState } from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    let image = "/assets/" + item.pictureUrl; 
    const [ quantityToAdd, setQuantityToAdd ] = useState(0);

    let agregaAlCarro = (valor) => {
        setQuantityToAdd(valor);
    }

    let terminarCompra = () => {
        console.log("Se termina la compra con la siguente cant de items: ", quantityToAdd)
    }

    return (
        <div className="itemDetail">
                <div>Detalle: <b>{item.title}</b></div>
                <p>{item.description}</p>
                <div>
                   <img alt="algo" src={image} />
                </div>
                <div>Precio: ${item.price} - Stock: <b>{item.stock}</b></div>
                {
                    (quantityToAdd === 0 ) 
                        ?   <ItemCount stock = {item.stock} initial = "1" onAdd={agregaAlCarro}/>
                        :   <NavLink to="/cart">
                                <button className="btnAgregarCarro" onClick={ terminarCompra }>Terminar compra</button>
                             </NavLink>
                }
  
        </div>
    );
}

export default ItemDetail;