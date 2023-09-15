import { useEffect, useState } from "react";
import { useProductContext } from "../../contexts/productContext";
import NavBar from "../../components/NavBar";
import { ProductCard } from "./productCard";
import { Loading } from "../../components/Loading";
import { ShopNavigation } from "./ShopNavigation";
import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const { category, setCategory, allCategories } = useProductContext();

  // getting current url path
  const location = useLocation();

  // function to change products displayed when there is a change in url path.
  const changeProducts = () => {
    let {
      shirts,
      bottoms,
      knits,
      sweaters,
      outwear,
      denim,
      footwear,
      accessories,
    } = allCategories;
    location.pathname.includes("shirt") && setCategory(shirts);
    location.pathname.includes("bottom") && setCategory(bottoms);
    location.pathname.includes("knit") && setCategory(knits);
    location.pathname.includes("sweater") && setCategory(sweaters);
    location.pathname.includes("outwear") && setCategory(outwear);
    location.pathname.includes("denim") && setCategory(denim);
    location.pathname.includes("footwear") && setCategory(footwear);
    location.pathname.includes("accessories") && setCategory(accessories);
  };

  useEffect(() => {
    if (allCategories) {
      changeProducts();
    }
  }, [allCategories, location.pathname]);

  return (
    <div className="bg-[#EDF0F8] min-h-screen overflow-x-hidden ">
      <NavBar />
      <section className="products-section flex flex-row px-5 ">
        <ShopNavigation />
        {category ? (
          <ul className="products-list   md:pl-5 ml-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 lg:grid-cols-3 pt-2 md:w-4/5 justify-end">
            {category.map((item) => (
              <ProductCard item={item} key={crypto.randomUUID()} />
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
