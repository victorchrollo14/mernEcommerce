import { useEffect, useState } from "react";
import { useProductContext } from "../../contexts/productContext";
import NavBar from "../../components/NavBar";
import { ProductCard } from "./productCard";
import { Loading } from "../../components/Loading";

const ShopPage = () => {
  const { products } = useProductContext();
  const [category, setCategory] = useState();

  useEffect(() => {
    if (products) {
      setCategory(products.shirts);
    }
  }, [products]);

  return (
    <div className="bg-[#DFDFDF] min-h-screen">
      <NavBar />
      {category ? (
        <ul className="products-list px-5 ml-0 grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-4 pt-2 ">
          {category.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <div className="loading-screen w-screen flex justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default ShopPage;
