
const ItemDetail = ({item}) => {
    let image = "/assets/" + item.pictureUrl; 

    return (
        <div className="itemDetail">
                <div>Detalle: <b>{item.title}</b></div>
                <p>{item.description}</p>
                <div>
                   <img alt="algo" src={image} />
                </div>
                <div>Precio: ${item.price} - Stock: <b>{item.stock}</b></div>
        </div>
    );
}

export default ItemDetail;