import { useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";

function App() {
  // let darkMode = true;
  // const cambiarModo = () => {
  //   darkMode = !darkMode;
  // };

  const [darkMode, setDarkMode] = useState(true);

  const cambiarModo = () => {
    // if (darkMode === true) {
    //   setDarkMode(false);
    // } else {
    //   setDarkMode(true);
    // }
    // setDarkMode(darkMode ? false : true);
    setDarkMode(!darkMode);
  };

  const [entraEnElDom, setEntraEnElDom] = useState(false);
  const montarOdesmontar = () => {
    setEntraEnElDom(!entraEnElDom);
  };

  return (
    <>
      <button onClick={cambiarModo}>Cambiar modo</button>
      {/* <Navbar darkMode={darkMode} />
      <ItemListContainer darkMode={darkMode} /> */}
      <button onClick={montarOdesmontar}>Montar y desmontar</button>
      {entraEnElDom ? <CartContainer darkMode={darkMode} /> : null}
    </>
  );
}

export default App;

// {
//   path: "/carrito",
//   <Cart />
// },
// {
//   path: "/login",
//   <Login />
// }
