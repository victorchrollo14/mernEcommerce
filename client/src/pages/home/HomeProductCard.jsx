import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

function HomeProductCard({ item }) {
  const navigate = useNavigate();
  const {user, token} = useUserContext();
  const addToCart = async () => {
    try {
      if (token) {
        const URL = import.meta.env.VITE_URL;
        const response = await fetch(`${URL}/cart/addItem`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            userID: user._id,
            productID: productID,
            quantity: quantity,
            size: size,
          }),
        });

        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      // console.log(error);
    }
  };

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
        <button className="product-addtocart-btn h-full flex text-2xl"
        onClick={() => {
          addToCart();
          navigate("/cart");
        }}
        >
          {" "}
          <div className="my-auto bg-PrimaryBlue text-white rounded-xl p-3">
            <HiOutlineShoppingCart />
          </div>
        </button>
      </div>
    </li>
  );
}

export default HomeProductCard;
