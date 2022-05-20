const Item = ({item}) =>  {
    let image = "/assets/" + item.pictureUrl; 
    
    return (
        <div className="item">
                <div className="header">{item.title}</div>
                <div>{item.description}</div>
                <div>Precio: ${item.price}</div>
                <div>
                    <img alt="algo" src={image} />
                </div>
                <div className="footer">Stock: <b>{item.stock}</b></div>
        </div>
    );
}

export default Item;