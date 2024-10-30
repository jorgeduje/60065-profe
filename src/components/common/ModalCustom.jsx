const ModalCustom = ({ title, children }) => {
  console.log(children);
  return (
    <div
      style={{
        border: "2px solid black",
        width: "300px",
      }}
    >
      <h2>{title}</h2>
      {children}
      <h3>Algo mas</h3>
    </div>
  );
};

export default ModalCustom;
