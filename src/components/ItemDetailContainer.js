import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import getItem from "./../services/apiItem";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        findItem(itemId); 
    }, []);

    const findItem = async (idItem) => {
        let unItem = await getItem(idItem);
        setItem(unItem);
    }

    return (
        <>
            <div className="itemDetailContainer">
                { 
                    <ItemDetail item={item}/> 
                }
            </div>
        </>
    );
}

export default ItemDetailContainer;