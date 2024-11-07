import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Badge from "@mui/material/Badge";

export const CartWidget = () => {
  const { cart } = useContext(CartContext); // siempre devuelve el objeto del value

  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="primary" showZero>
        <FaShoppingCart size={"22px"} />
      </Badge>
    </Link>
  );
};
