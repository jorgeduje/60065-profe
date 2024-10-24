import { useEffect, useState } from "react";
import { products } from "../../../products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    console.log(objeto);
  };

  return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;
