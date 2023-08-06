import { HiOutlineShoppingCart } from 'react-icons/hi'
function HomeProductCard(props) {
	const data = {
		"id": 1,
		"title": "Fjallraven - Foldsack No. 1 Backpack Fits 15 Laptops",
		"price": 109.95,
		"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		"category": "men's clothing",
		"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		"rating": {
			"rate": 3.9,
			"count": 120
		}
	}

	function truncateText(text, maxLength) {
		if (text.length <= maxLength) {
			return text;
		} else {
			return text.substring(0, maxLength - 3) + '...';
		}
	}

	const maxLength = 40;
	const truncatedTitle = truncateText(data.title, maxLength);
	return (
		<div className="product-card w-[26rem] h-[25rem] md:h-[37rem] md:w-[32rem] rounded-lg m-6 flex flex-col">
			<div className="product-card-image-div w-full h-[30rem] flex bg-white rounded-xl">
				<img className="product-card-image m-auto rounded-xl" src={props.image} alt="" />
			</div>
			<div className="product-card-info flex mt-4 justify-between">
				<div className='w-4/5'>
					<p className="product-card-title text-lg md:text-xl my-1 text-[#494949]">{truncatedTitle}</p>
					<p className="product-card-price text-xl md:text-2xl my-2 font-medium">${data.price}</p>
				</div>
				<div className="product-addtocart-btn h-full flex text-2xl"> <div className='my-auto bg-[#1E1E1E] text-white rounded-xl p-3'><HiOutlineShoppingCart /></div></div>
			</div>
		</div>
	);
}

export default HomeProductCard
