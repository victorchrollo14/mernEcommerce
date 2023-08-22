import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import {
  FaRegHeart,
  FaRegStar,
  FaRegCommentDots,
  FaMinus,
  FaPlus,
} from "react-icons/fa6";
import { BsShare, BsHandbag, BsTruck } from "react-icons/bs";
import main2 from "../product/main2.jpeg";
import sub2 from "../product/sub2.jpeg";
import Footer from "../../components/Footer";

const ProductPage = () => {
  const { id } = useParams();
  const data = {
    id: 1,
    title: "The short sleeve hawthrone",
    price: 300,
    description: `When it's colder than the far side of the moon and spitting rain
      too, you've still got to look good. From water-repellent leather
      to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you
      can keep your flame burning when the weather hits`,
    category: "In For Strip",
    rating: 4.3,
    reviews: 67,
  };

  return (
    <>
      <NavBar />
      <div className="product_detail flex flex-col mx-4 mt-6 mb-10 font-Poppins md:flex-row xl:mx-32 xl:mt-8">
        <div className="left_section flex flex-col mt-2 xl:w-1/2">
          <div className="heading flex justify-between items-center ml-2 mt-2">
            <div className="left_heading flex flex-col md:ml-2 xl:ml-4">
              <h1 className="text-2xl font-Poppins font-semibold pr-4 md:text-xl xl:text-2xl">
                {data.title}
              </h1>
              <span className="text-sm font-Poppins text-black opacity-70">
                {data.category}
              </span>
            </div>
            <div className="icons flex mr-3 gap-2">
              <FaRegHeart className="text-sky-800 bg-sky-100 rounded-lg w-9 h-9 p-2" />
              <BsShare className="text-sky-800 font-semibold bg-sky-100 rounded-lg w-9 h-9 p-2" />
            </div>
          </div>
          <div className="main_image rounded-lg border border-slate-100 h-[500px] mx-2 mt-4 xl:h-[600px] xl:mx-5">
            <img
              className="object-cover h-full w-full rounded-lg"
              src={main2}
            />
          </div>
          <div className="sub_images rounded-md flex gap-2 justify-around items-start my-3 mx-4">
            <img
              src={main2}
              alt=""
              className="object-cover h-[115px] w-[115px] rounded-md  border border-slate-100 "
            />
            <img
              src={sub2}
              alt=""
              className="object-cover h-[115px] w-[115px] rounded-md  border border-slate-100 "
            />
            <img
              src={main2}
              alt=""
              className="object-cover h-[115px] w-[115px] rounded-md  border border-slate-100 "
            />
            <img
              src={sub2}
              alt=""
              className="object-cover h-[115px] w-[115px] rounded-md  border border-slate-100 "
            />
          </div>
        </div>
        <div className="right_section flex flex-col md:w-4/6 md:mt-4 pl-2 lg:w-3/5 lg:mt-2 xl:mt-4">
          <div className="description border-b border-gray-300 pb-3 mx-2 mt-3">
            <h1 className="text-lg font-semibold xl:text-xl">Description</h1>
            <p className="text-base text-gray-500 xl:mt-2 xl:text-lg">
              {data.description}
            </p>
          </div>
          <div className="price_section flex flex-col border-b border-gray-300 pb-3 mx-2 mt-2 xl:mt-4 lg:flex-row">
            <span className="font-semibold text-indigo-900 mt-3 px-3 text-4xl">
              ${data.price}
            </span>
            <div className="left_price flex flex-col mt-2 xl:mt-1 lg:ml-4">
              <div className="rating_review flex ml-2 mt-2 gap-2">
                <span className="rating_section flex justify-between items-center px-3 py-2 bg-orange-200 rounded-3xl gap-1">
                  {/* <span className="px-1">S</span> */}
                  <FaRegStar className="text-orange-600 text-md" />
                  <span className="ratings font-semibold text-orange-600">
                    {data.rating}
                  </span>
                </span>
                <span className="review_section flex justify-between items-center px-3 py-2 bg-sky-200 rounded-3xl gap-1">
                  <FaRegCommentDots />
                  <span className="reviews font-semibold px-1 text-indigo-900">
                    {data.reviews} Reviews
                  </span>
                </span>
              </div>
              <span className="recommended text-slate-400 mx-3 mt-2">
                <span className="text-green-600">93%</span>of buyers have
                recommended this.
              </span>
            </div>
          </div>
          <div className="size_section mx-3 my-2 border-b border-gray-300 pb-3">
            <span className="text-lg xl:text-xl">Choose size</span>
            <div className="size_selection flex flex-wrap mt-1 mb-3 gap-2 xl:mt-4">
              <div className="radio flex items-center justify-around bg-sky-200 px-2 py-1 rounded-lg gap-1">
                <input type="radio" name="small" id="" checked />
                <span className="text-indigo-900">Small</span>
              </div>
              <div className="radio flex items-center justify-around bg-gray-200 px-2 py-1 rounded-lg gap-1  xl:text-lg">
                <input type="radio" name="medium" id="" />
                <span>Medium</span>
              </div>
              <div className="radio flex items-center justify-around bg-gray-200 px-2 py-1 rounded-lg gap-1  xl:text-lg">
                <input type="radio" name="large" id="" />
                <span>Large</span>
              </div>
              <div className="radio flex items-center justify-around bg-gray-200 px-2 py-1 rounded-lg gap-1  xl:text-lg">
                <input type="radio" name="extra_large" id="" />
                <span>Extra Large</span>
              </div>
              <div className="radio flex items-center justify-around bg-gray-200 px-2 py-1 rounded-lg gap-1  xl:text-lg">
                <input type="radio" name="xxl" id="" />
                <span>XXL</span>
              </div>
            </div>
          </div>
          <div className="add_cart my-2 flex flex-row mx-2 lg:mt-4">
            <div className="qty_counter flex justify-around w-28 px-3 py-3 bg-gray-200 items-center rounded-3xl gap-2 md:ml-2 lg:w-32">
              <FaMinus className="text-indigo-900 text-md" />
              <span className="qty font-Poppins font-semibold">5</span>
              <FaPlus className="text-indigo-900 text-md" />
            </div>
            <button className="cartButton flex px-6 py-2 ml-6 items-center justify-between font-semibold gap-3 bg-indigo-900 text-white rounded-3xl lg:px-16">
              <BsHandbag />
              Add To Cart
            </button>
          </div>
          <div className="free_return mt-2 border border-stone-500 rounded-md mx-2 mb-10 md:mt-3 lg:mx-4 lg:mt-4 xl:mt-14 xl:mr-10">
            <div className="free_delivery flex mx-2 py-3 border-b border-gray-300">
              <BsTruck className="text-red-500 text-lg mt-1" />
              <div className="free_deatils flex flex-col mx-3">
                <span className="text-indigo-900 font-semibold">
                  Free Delivery
                </span>
                <span className="text-gray-600 underline">
                  Enter your Postal code for Delivery Availability
                </span>
              </div>
            </div>
            <div className="return_product mx-2 py-3 pb-6 flex">
              <BsHandbag className="text-red-500 mt-1" />
              <div className="return_details flex flex-col mx-3">
                <span className="text-indigo-900 font-semibold">
                  Return Delivery
                </span>
                <span className="text-gray-600">
                  Free 30 days Delivery Return.{" "}
                  <span className="underline">Details</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
