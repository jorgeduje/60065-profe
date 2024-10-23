import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams(); // {}.name --> undefined
  // undefined || "con algo"
  // undefined ---> estoy en el home ---> mostrar todos los productos
  // "algo" ---> estoy en una categoria ---> una fraccion

  const [items, setItems] = useState([]);

  useEffect(() => {
    const unaFraccion = products.filter(
      (producto) => producto.category === name
    );
    const getProducts = new Promise((resolve) => {
      resolve(name ? unaFraccion : products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, [name]);
  return <ItemList items={items} />;
};
