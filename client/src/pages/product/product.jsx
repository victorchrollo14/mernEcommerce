import NavBar from "../../components/NavBar";

const ProductPage = () => {
  const data = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
  return (
    <>
      <NavBar />
      <div className="product-page w-screen min-h-[80vh] flex justify-center items-center bg-[#EFF2F6]">
        <div className="product-img w-96 mr-28 bg-white border-2 border-black rounded-xl p-9">
          <img className="w-80" src={data.image} alt={`${data.title} Image`} />
        </div>
        <div className="product-info w-[28rem] ml-28 overflow-x-hidden">
          <p className="product-title my-5 text-4xl font-semibold">{data.title}</p>
          <p className="product-price my-5 font-medium text-2xl">${data.price}</p>
          <p className="product-description my-5 ">{data.description}</p>
          <button className="bg-black hover:bg-[#252525] text-white border-none text-lg px-20 py-2">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
