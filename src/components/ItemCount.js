import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp  } from "react-icons/fa";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    let [count, setCount] = useState(initial>stock?stock:initial);

    let  actualizaContador = (cantidad) => {
        let valor = Number(count) + Number(cantidad);
        if (valor < 0) {
            valor = 0;
        } else if (valor > stock) {
            valor = stock;
        }

        setCount(valor);
    }

    let agregaAlCarro = () => {
        if ((0 < stock) && (0 < count)) {
            console.log(`Se agregan al carro ${count} items.`)
            onAdd(count);
        }
    }

    return (<div className="contadorPadre">
        <div className="contador">
            <div>
                <FaRegArrowAltCircleDown
                    className="control-contador"
                    onClick={() => actualizaContador(-1)}/>
            </div>
            
            <div>
                {count}
            </div>
            <div>
                <FaRegArrowAltCircleUp 
                    className="control-contador" 
                    onClick={() => actualizaContador(1)}/>
            </div>
            
        </div>
        <button className="btnAgregarCarro" onClick={ () => agregaAlCarro() }>Agregar  al carrito</button>
    </div>);
}


export default ItemCount;