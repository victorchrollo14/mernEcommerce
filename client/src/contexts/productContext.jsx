import { useContext, createContext, useState, useEffect } from "react";

const productContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState("");
  const [category, setCategory] = useState();
  const [allCategories, setAllCategories] = useState();

  const exmpCat = {
    shirts: [],
    knits: [],
    sweaters: [],
    bottoms: [],
    denim: [],
    outwear: [],
    footwear: [],
    accessories: [],
  };

  const filterProducts = (data) => {
    exmpCat.shirts = data.filter((product) => product.category === "shirts");
    exmpCat.knits = data.filter((product) => product.category === "knits");
    exmpCat.bottoms = data.filter((product) => product.category === "bottoms");
    exmpCat.denim = data.filter((product) => product.category === "denim");
    exmpCat.sweaters = data.filter(
      (product) => product.category === "sweaters"
    );
    exmpCat.outwear = data.filter((product) => product.category === "outwear");
    exmpCat.footwear = data.filter(
      (product) => product.category === "footwear"
    );
    exmpCat.accessories = data.filter(
      (product) => product.category === "accessories"
    );
    setAllCategories(exmpCat);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("../converted_product.json");
        const data = await response.json();
        filterProducts(data);

        setProducts(data);
        setCategory()
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductData();
  }, []);

  return (
    <productContext.Provider
      value={{ products, setProducts, category, setCategory, allCategories }}
    >
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
