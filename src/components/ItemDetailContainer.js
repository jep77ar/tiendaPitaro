import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../app/services/productosApi";
import ItemEmpty from "./ItemEmpty";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    findItem(itemId);
  }, []);

  const findItem = async (idItem) => {
    let unItem = await getProductById(idItem);
    setItem(unItem);
  };

  return (
    <>
      <div className="itemDetailContainer">
        {item.stock > 0 ? (
          <ItemDetail item={item} />
        ) : (
          <ItemEmpty item={item} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
