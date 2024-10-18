import axios from "axios";
import { useEffect, useState } from "react";
import { productInstance } from "../api/productsInstance";

const FetchingData = () => {
  const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     const getProducts = fetch("https://fakestoreapi.com/products", {
  //       method: "POST",
  //       body: JSON.stringify(),
  //     });

  //     getProducts
  //       .then((res) => res.json())
  //       .then((res) => setProducts(res))
  //       .catch((err) => console.log(err))
  //       .finally(() => console.log("termino"));
  //   }, []);
  useEffect(() => {
    const getProducts = productInstance.get("/");

    getProducts
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
      .finally(() => console.log("termino"));
  }, []);

  const createProduct = () => {
    const nuevoProducto = { title: "dsad", precio: 2000 };
    productInstance.post("/", nuevoProducto);
  };

  console.log(products);
  return <div>FetchingData</div>;
};

export default FetchingData;
