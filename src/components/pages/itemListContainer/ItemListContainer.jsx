import { Card } from "../../common/card/Card";

export const ItemListContainer = ({ darkMode }) => {
  console.log("itemlist ", darkMode);
  return (
    <div style={{ backgroundColor: darkMode ? "black" : "white" }}>
      <Card title="nike" price={1200} stock={5} />
      <Card title="nike 2" price={500} stock={15} />
      <Card title="wilson " price={111} stock={51} />
      <Card title="pepe" price={300} stock={12} />
    </div>
  );
};

// const sumar =  ( {}) => {
//   return 2 + 2;
// };

// sumar("dadsa", "dasd");

// sumar(1, 3);
// sumar(4, 2);
// sumar(6, 2);
