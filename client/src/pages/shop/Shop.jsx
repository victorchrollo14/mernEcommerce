import { useEffect, useState } from "react";
import { useProductContext } from "../../contexts/productContext";
import NavBar from "../../components/NavBar";
import { ProductCard } from "./productCard";
import { Loading } from "../../components/Loading";
import { ShopNavigation } from "./ShopNavigation";

const ShopPage = () => {
  const { products } = useProductContext();
  const [category, setCategory] = useState();

  useEffect(() => {
    if (products) {
      setCategory(products.shirts);
    }
  }, [products]);

  return (
    <div className="bg-[#EDF0F8] min-h-screen overflow-x-hidden ">
      <NavBar />
      <section className="products-section flex flex-row px-5 ">
        <ShopNavigation
          products={products}
          category={category}
          setCategory={setCategory}
        />
        {category ? (
          <ul className="products-list   md:pl-5 ml-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 lg:grid-cols-3 pt-2 md:w-4/5 justify-end">
            {category.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </ul>
        ) : (
          <div className="loading-screen w-screen flex justify-center">
            <Loading />
          </div>
        )}
      </section>
    </div>
  );
};

export default ShopPage;
