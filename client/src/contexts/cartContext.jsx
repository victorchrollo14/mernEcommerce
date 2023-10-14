import { useContext, createContext, useEffect, useState } from "react";
import { useUserContext } from "./userContext";

const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { token, user } = useUserContext();
  const [cart, setCart] = useState();

  const fetchCart = async () => {
    try {
      const URL = import.meta.env.VITE_URL;
      const response = await fetch(`${URL}/cart/getCart/${user._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token && user) {
      console.log(token, user);
      fetchCart();
    }
  }, [token, user]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(cartContext);
  if (context === undefined) {
    throw new Error("");
  }
  return context;
};

export { CartContextProvider, useCartContext };
