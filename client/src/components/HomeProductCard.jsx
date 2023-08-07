import { HiOutlineShoppingCart } from 'react-icons/hi'
function HomeProductCard(props) {
	const data = {
		"id": 1,
		"title": "The Pruce Shirts",
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
		<div className="product-card w-full min-h-[26rem] sm:w-1/2 lg:w-1/3 rounded-lg p-6 flex flex-col">
			<img className="product-card-image w-full  rounded-xl" src={props.image} alt="" />
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
