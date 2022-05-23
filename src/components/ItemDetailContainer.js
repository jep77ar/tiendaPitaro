import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import getItem from "./../services/apiItem";

const ItemDetailContainer = ({identificador}) => {

    const [item, setItem] = useState({});

    useEffect(() => {
        findItem(identificador);
    }, []);

    const findItem = async (idItem) => {
        let unItem = await getItem(idItem);
        console.log("el valor del id>item es: ", idItem, unItem)
        setItem(unItem);
    }

    return (
        <>
            <div>
                { 
                    <ItemDetail item={item}/> 
                }
            </div>
        </>
    );
}

export default ItemDetailContainer;