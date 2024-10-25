import Counter from "../../common/counter/Counter";

const ItemDetail = ({ item, agregarAlCarrito }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <h2>{item.description}</h2>
      <img src={item.imageUrl} alt="" />

      <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};

export default ItemDetail;

{
  /* <button onClick={()=>agregarAlCarrito(contador)}>Agregar al carrito</button> */
}
