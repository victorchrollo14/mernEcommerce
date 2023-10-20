import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";
import { Loading } from "../../components/Loading";

import { useProductContext } from "../../contexts/productContext";

const ProductPage = () => {
  const { products } = useProductContext();
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if (products) {
      const currentProduct = products.find((product) => product._id === id);
      setData(currentProduct);
    }
  }, [products]);

  return (
    <>
      <NavBar />
      {data ? (
        <div className="product_detail flex flex-col mx-4 mt-4 mb-10 font-Poppins md:flex-row xl:mx-32 xl:mt-8">
          <LeftContent data={data} />
          <RightContent data={data} />
        </div>
      ) : (
        <div className="text-5xl h-[50vh] text-center text-red">
          <Loading />
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductPage;
