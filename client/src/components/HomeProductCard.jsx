import { HiOutlineShoppingCart } from 'react-icons/hi'
function HomeProductCard(props) {
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
		<div className="product-card w-[28rem] h-[37rem] rounded-lg m-6 flex flex-col">
			<div className="product-card-image-div w-full h-[30rem] flex bg-white rounded-xl">
				<img className="product-card-image w-11/12 m-auto" src={props.image} alt="" />
			</div>
			<div className="product-card-info flex mt-4 justify-between">
				<div className='w-4/5'>
					<p className="product-card-title text-xl font-light  my-1 text-[#494949]">{data.title}</p>
					<p className="product-card-price text-3xl my-2 font-medium">${data.price}</p>
				</div>
				<div className="product-addtocart-btn h-full flex text-3xl"> <div className='my-auto bg-[#1E1E1E] text-white rounded-2xl p-4'><HiOutlineShoppingCart /></div></div>
			</div>
		</div>
	);
}

export default HomeProductCard
