import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item">
      <NavLink className="item" to={"/item/" + item.id}>
        <div className="header">{item.title}</div>
        <div>{item.description}</div>
        <div>Precio: ${item.price}</div>
        <div>
          <img alt="algo" src={item.pictureUrl} />
        </div>
        <div className="footer">
          Stock: <b>{item.stock}</b>
        </div>
      </NavLink>
    </div>
  );
};

export default Item;
