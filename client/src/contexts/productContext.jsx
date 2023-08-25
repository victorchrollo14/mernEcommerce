import { useContext, createContext, useState, useEffect } from "react";

const productContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("../product.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductData();
  }, []);

  return (
    <productContext.Provider value={{ products, setProducts }}>
      {props.children}
    </productContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(productContext);
  if (context === undefined) {
    throw new Error(
      "useProductContext must be within a productContextProvider. Make sure the component is wrapped in productContextProvider"
    );
  }
  return context;
};

export { ProductContextProvider, useProductContext };
