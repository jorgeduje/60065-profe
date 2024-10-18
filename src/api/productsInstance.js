import axios from "axios";

export const productInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  headers: { Authorization: "dsadasd123123dawsdasDSADsa1231" },
});

// productInstance.get(/products)
// productInstance.post(/users)
