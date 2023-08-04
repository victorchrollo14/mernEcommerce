import {HiOutlineShoppingCart} from 'react-icons/hi'
function ProductCard() {
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
        <div className="product-card w-[25rem] h-[37rem] rounded-lg m-5 flex flex-col">
            <div className="product-card-image-div w-full h-[30rem] flex bg-white rounded-xl">
                <img className="product-card-image w-9/12 m-auto" src={data.image} alt="" />
            </div>
            <div className="product-card-info flex mt-4 justify-between">
                <div>
                    <p className="product-card-title text-xl font-medi3m  my-1 text-[#686868]">{data.title}</p>
                    <p className="product-card-price text-3xl my-1 font-semibold">${data.price}</p>
                    </div>
                    <div className="product-addtocart-btn h-16 w-24 flex justify-center items-center bg-[#1E1E1E] text-white rounded-3xl text-4xl relative top-1/4 ml-3"><HiOutlineShoppingCart /></div>
            </div>
        </div>
    );
}

export default ProductCard
