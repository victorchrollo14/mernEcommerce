import { useContext, createContext, useEffect, useState } from "react";
import { useUserContext } from "./userContext";
import { useProductContext } from "./productContext";

const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { token, user } = useUserContext();
  const { products } = useProductContext();
  const [cart, setCart] = useState();

  const getCartData = (data) => {
    const items = data.items.map((item) => {
      const productData = products.find(
        (product) => product._id === item.productID
      );
      let newItem = {
        _id: item._id,
        productID: item.productID,
        quantity: item.quantity,
        size: item.size,
        title: productData.title,
        price: productData.price,
        images: productData.images,
      };
      return newItem;
    });

    return items;
  };

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
      if (data.message) {
        return;
      }
      const cartData = getCartData(data);
      setCart(cartData);
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
    throw new Error(
      "useCartContext must be within a CartContextProvider, Make sure that the component is wrapped within a CartContextProvider"
    );
  }
  return context;
};

export { CartContextProvider, useCartContext };
