export const Card = ({ image, title, price, stock }) => {
	return (
		<div
			style={{
				border: "2px solid black",
				width: "200px",
				minHeight: "200px",
			}}>
			<img
				src={image}
				style={{
					width: "100px",
				}}
			/>
			<h2>Titulo: {title}</h2>
			<h3>Precio: {price}</h3>
			<h3>Stock: {stock}</h3>
			{/* <img src={props.image} alt="" /> */}
		</div>
	);
};

// export const Card = ({ image, title, price, stock }) => (
// 	<div
// 		style={{
// 			border: "2px solid black",
// 			width: "200px",
// 			minHeight: "200px",
// 		}}>
// 		<img
// 			src={image}
// 			style={{
// 				width: "100px",
// 			}}
// 		/>
// 		<h2>Titulo: {title}</h2>
// 		<h3>Precio: {price}</h3>
// 		<h3>Stock: {stock}</h3>
// 		{/* <img src={props.image} alt="" /> */}
// 	</div>
// );