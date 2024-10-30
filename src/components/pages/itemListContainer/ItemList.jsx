import { Card } from "../../common/card/Card";
import ModalCustom from "../../common/ModalCustom";

const ItemList = ({ items }) => {
  return (
    <>
      <h2>Listado de productos</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {items.map(({ id, title, price, stock, imageUrl }) => (
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={imageUrl}
            id={id}
          />
        ))}
      </div>

      {/* <ModalCustom title="titulo custom">
        <div>
          <h5>un formulario</h5>
          <form action="">
            <input type="text" placeholder="nombre" />
          </form>
        </div>
      </ModalCustom> */}
    </>
  );
};

export default ItemList;
// let children = (
//   <div>
//     <h5>un formulario</h5>
//     <form action="">
//       <input type="text" placeholder="nombre" />
//     </form>
//   </div>
// );

// { children }
