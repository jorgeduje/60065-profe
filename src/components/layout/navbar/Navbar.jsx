import "./navbar.css";

export const Navbar = () => {
  let nombre = "pepe";
  const sumar = () => {
    console.log(2 + 2);
  };

  return (
    <>
      <div className="container-navbar">
        <h2>Nombre de la tienda</h2>

        <h2>{nombre}</h2>
        <li>Urbanas </li>

        <li>Deportivas</li>
        <button onClick={sumar}>sumar</button>
      </div>
      <div>
        <h3>das</h3>
      </div>
    </>
  );
};

// export const sumar = ()=>{
//   return {das: 21}
// }

// sumar() // ---> Hola como estas

{
  /* <Navbar />; // --> */
}
