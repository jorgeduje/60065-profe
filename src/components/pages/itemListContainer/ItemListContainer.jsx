import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ItemList } from "../../common/ItemList/ItemList";
import "./itemListContainer.css";

let myProductsPromise = new Promise((res, rej) => {
	setTimeout(() => {
		if (products.length === 0) {
			rej("Productos vacios");
		} else {
			res(products);
		}
	}, 2000);
});

export const ItemListContainer = () => {
	const [myProducts, setMyProducts] = useState([]);

	useEffect(() => {
		myProductsPromise
			.then((data) => {
				// if (data.length === 4) throw new Error("Error");
				setMyProducts(data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				// console.log("SIEMPRE SE EJECUTA")
			});
	}, []);

  console.log(myProducts);

	return (
		<div className="il-container">
      <ItemList myProducts={myProducts} />
		</div>
	);
};
