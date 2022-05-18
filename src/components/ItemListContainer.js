import ItemCount from "./ItemCount";

  let agregaAlCarro = (valor) => {
    console.log("Se agregó en el carrito la siguiente cantidad: ", valor )
  }

const ItemListContainer = ({greeting}) => {


  return (<>
  <h3>{greeting}</h3>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <ItemCount stock = "10" initial = "1" onAdd={agregaAlCarro}/>
    </>
  );

}

export default ItemListContainer;