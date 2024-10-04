// hook
// useState
import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  const cambiarModo = () => {
    setIsDark(!isDark);
  };

  console.log(isDark);

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <h2>Contador = {contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
      <button onClick={cambiarModo}>Cambiar modo </button>
    </div>
  );
};

export default Counter;
