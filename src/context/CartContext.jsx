import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{} {} {quantity: 5}] ---> [{} {} {el modificar}]

  const addToCart = (product) => {
    // si esta , que no lo agregue
    // si no esta, que si lo agregue
    // let isInCart = cart.filter ( el => el.id === product.id ) // []
    // let isInCart = cart.find( el => el.id === product.id ) // elemento || undefined
    let isInCart = cart.some((el) => el.id === product.id); // booleano

    if (isInCart) {
      // generar un nuevo array, igual que el anterior pero con un { } modificado
      // con ese array remplazar el anteriror

      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      }); // [{}{}{}]

      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
    setCart(arrayFiltrado);
  };

  const getTotalQuantity = (id) => {
    const product = cart.find((elemento) => elemento.id === id);
    // return product ? product.quantity : 0
    if (product) {
      return product.quantity;
    } else {
      return 0;
    }
  };

  const getTotalAmount = () => {
    // [ {} {}]
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0); // devuelve el acumulador

    return total;
  };

  let data = {
    cart,
    addToCart,
    removeById,
    resetCart,
    getTotalQuantity,
    getTotalAmount,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
