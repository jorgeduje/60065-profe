import { useEffect, useState } from "react";
import { products } from "../../../products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  let id = "1";
  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
