import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

function HomeProductCard({ item }) {
  return (
    <li
      className="product-card w-full min-h-[26rem] sm:w-1/2 lg:w-1/3 rounded-lg p-6 flex flex-col"
      key={item._id}
    >
      <Link to={`/shop/${item.category}/${item._id}`}>
        {" "}
        <img
          className="product-card-image w-full  rounded-xl"
          src={item.images[0]}
          alt=""
        />
      </Link>

      <div className="product-card-info flex mt-4 justify-between">
        <div className="w-4/5">
          <p className="product-card-title text-lg md:text-xl my-1 text-slate">
            {item.title}
          </p>
          <p className="product-card-price text-xl md:text-2xl my-2 font-medium">
            ${item.price}
          </p>
        </div>
        <div className="product-addtocart-btn h-full flex text-2xl">
          {" "}
          <div className="my-auto bg-PrimaryBlue text-white rounded-xl p-3">
            <HiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </li>
  );
}

export default HomeProductCard;
