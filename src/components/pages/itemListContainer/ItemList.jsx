import { Card } from "../../common/card/Card";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Listado de productos</h2>
      {items.map(({ id, title, price, stock }) => (
        <Card key={id} title={title} price={price} stock={stock} />
      ))}
    </div>
  );
};

export default ItemList;
