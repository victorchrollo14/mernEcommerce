import { useContext, createContext, useEffect, useState } from "react";
const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState();

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(cartContext);
  if (context === undefined) {
    throw new Error(
      "useCartContext must be within a CartContextProvider, Make sure that the component is wrapped within a CartContextProvider"
    );
  }
  return context;
};

export { CartContextProvider, useCartContext };
