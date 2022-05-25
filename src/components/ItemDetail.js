import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    let image = "/assets/" + item.pictureUrl; 

    let agregaAlCarro = (valor) => {
        console.log("Se agregó en el carrito la siguiente cantidad: ", valor )
    }
    
    return (
        <div className="itemDetail">
                <div>Detalle: <b>{item.title}</b></div>
                <p>{item.description}</p>
                <div>
                   <img alt="algo" src={image} />
                </div>
                <div>Precio: ${item.price} - Stock: <b>{item.stock}</b></div>
                <ItemCount stock = "10" initial = "1" onAdd={agregaAlCarro}/>
        </div>
    );
}

export default ItemDetail;