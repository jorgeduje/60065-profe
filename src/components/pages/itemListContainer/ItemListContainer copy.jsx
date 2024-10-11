import { products } from "../../../products";
import { Card } from "../../common/card/Card";
import "./itemListContainer.css";

// let task = new Promise((res,rej)=>{
//   let num = 2;
//   // res("Promesa cumplida")
//   if (num === 1){
//     res("Es uno")
//   }else{
//     rej("No es uno")
//   }
// })

let myProductsPromise = new Promise((res,rej)=>{
  res(products);
})

export const ItemListContainer = () => {
  console.log(products);
  // console.log(task);
  // task.then((res) => {
	// 	console.log(res);
	// 	return "HOLA";
  // })
	// 	.then((res2) => {
	// 		console.log(res2);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
  //     return "ERROR con return";
	// 	})
	// 	.then((res2) => {
	// 		console.log(res2);
	// 	});

  return (
    <div className="il-container">
      <Card title="nike" price={1200} stock={5} />
      <Card title="nike 2" price={500} stock={15} />
      <Card title="wilson " price={111} stock={51} />
      <Card title="pepe" price={300} stock={12} />
    </div>
  );
};