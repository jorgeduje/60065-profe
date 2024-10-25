import { Link } from "react-router-dom";

const CartContainer = () => {
  return (
    <div>
      <h1>Aca el carrito</h1>
      <Link to="/checkout" style={{ color: "black" }}>
        Finalizar compra
      </Link>
    </div>
  );
};

export default CartContainer;
