import NavBar from "../../components/NavBar";
import ProductCard from "./HomeProductCard";
import Footer from "../../components/Footer";
import Reviews from "./Reviews";
import Banner from "./Banner";
import Brands from "./Brands";
import { Loading } from "../../components/Loading";

import { useProductContext } from "../../contexts/productContext";
import { useEffect, useState } from "react";

const Home = () => {
  const { allCategories } = useProductContext();
  const [featured, setFeatured] = useState();

  const getRandom = () => {
    const randomProducts = [];
    const shirts = allCategories.shirts;
    const bottoms = allCategories.bottoms;
    const knits = allCategories.knits;
    const denim = allCategories.denim;
    const footwear = allCategories.footwear;
    const accessories = allCategories.accessories;
    const products = [shirts, bottoms, knits, denim, accessories, footwear];

    for (let item of products) {
      const random = Math.floor(Math.random() * item.length);
      randomProducts.push(item[random]);
    }
    setFeatured(randomProducts);
  };

  useEffect(() => {
    if (allCategories) {
      getRandom();
    }
  }, [allCategories]);

  return (
    <div className="overflow-x-hidden w-full">
      <NavBar />
      <Banner />
      <Brands />
      <div className="home flex w-screen justify-center pt-4 mt-10 bg-lightestBlue">
        {featured ? (
          <div className="home-product-cards sm:w-[90%] flex flex-wrap justify-center flex-row">
            {featured.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
