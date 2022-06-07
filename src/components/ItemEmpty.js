import { useNavigate } from "react-router-dom";

const ItemEmpty = ({ item }) => {
  let navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="itemDetail">
        <h3>No hay stock</h3>
        <div>
          Detalle: <b>{item.title}</b>
        </div>
        <div>
          <img alt="algo" src={item.pictureUrl} />
        </div>
        <button onClick={backToHome}>Ir al Inicio</button>
      </div>
    </>
  );
};

export default ItemEmpty;
