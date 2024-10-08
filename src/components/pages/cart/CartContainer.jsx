import { useState, useEffect } from "react";

const CartContainer = ({ darkMode }) => {
  const [counter, setCounter] = useState(0);
  const [nombre, setNombre] = useState("pepe");
  const [items, setItems] = useState([]);

  useEffect(() => {
    // llame a la API --> responda con mis productos
  }, []);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const cambiarNombre = () => {
    setNombre(nombre === "pepe" ? "juan" : "pepe");
  };

  //   const cambiarTodo = () => {
  //     setCounter(counter + 1);
  //     setNombre(nombre === "pepe" ? "juan" : "pepe");
  //   };

  console.log("me ejecuto fuera del effect");

  //   useEffect(() => {
  //     console.log("aca le pido los datos a un servidor alojado en la india");
  //   }, [nombre, darkMode]); // ---> array de dependencias

  useEffect(() => {
    console.log("aca le pido los datos a un servidor alojado en la india");
  }, []); // ---> array de dependencias

  return (
    <div>
      <h2>{counter}</h2>
      <h3>{nombre}</h3>
      <button onClick={sumar}>sumar</button>
      <button onClick={cambiarNombre}>cambiar nombre</button>
    </div>
  );
};

export default CartContainer;
