export const Card = ({ title, price, stock, image }) => {
  return (
    <div style={{ border: "2px solid black", width: "200px", height: "300px" }}>
      <img src={image} alt="" style={{ width: "100px" }} />
      <h2>Titulo: {title}</h2>
      <h3>Precio: {price}</h3>
      <h3>Stock: {stock}</h3>
      <button>Ver detalle</button>
    </div>
  );
};
