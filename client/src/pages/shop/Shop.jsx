import NavBar from "../../components/NavBar";
import { useProductContext } from "../../contexts/productContext";

const ShopPage = () => {
  const { products } = useProductContext();
  console.log(products.shirts)

  return (
    <div className="bg-[#DFDFDF]">
      <NavBar />
      <h1>Shop Page</h1>
    </div>
  );
};

export default ShopPage;
