// exportacion del contexto
import { createContext, useState } from "react";
export const CartContext = createContext();

// exportacion del componente de react que provea el contexto

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{} {} {} ]

  console.log(cart);
  // agregar al carrito
  const addToCart = (product) => {
    // que agrego ? ---> el product lo agrego
    setCart([...cart, product]);
  };
  const resetCart = () => {
    setCart([]);
  };

  // elminar del carrito
  const removeById = (id) => {
    // filter --> todos los que no sean el del id que quiero eliminar
    // genero un array con todos excepto con el que quiero eliminar
    // [ con todos excepto 1 ] --> setCart( con ese array )

    let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
    setCart(arrayFiltrado);
  };

  let data = { cart, addToCart, removeById, resetCart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

{
  /* <CartContextProvider>
    <App /> 
</CartContextProvider>  */
}
// dom --> podamos ver toda la app debemos recibir los hijos y darles permiso

// 0 ---> cart ---> cart.length
