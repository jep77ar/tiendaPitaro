import Item from "./Item";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemList = ({ items }) => {
    return(
        <div className="itemList">
            {
                items.map(item =>   <div        
                                        key={item.id} >
                                        <Item item={item}/>
                                        <ItemDetailContainer identificador={item.id} />
                                    </div>)
            }
        </div>
    );
}

export default ItemList;