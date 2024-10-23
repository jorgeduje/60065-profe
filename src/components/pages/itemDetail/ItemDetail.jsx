const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.description}</h2>
      <img src={item.imageUrl} alt="" />
    </div>
  );
};

export default ItemDetail;
