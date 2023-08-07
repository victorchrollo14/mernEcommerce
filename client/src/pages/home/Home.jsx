import NavBar from "../../components/NavBar";
import ProductCard from "../../components/HomeProductCard";
import img1 from '../../assets/shirts.jpg'
import img2 from '../../assets/outwear.jpg'
import img3 from '../../assets/bottom.webp'
import img4 from '../../assets/sweater.webp'
import img5 from '../../assets/accesories.webp'
import img6 from '../../assets/footwear.webp'
import Footer from "../../components/Footer";

const Home = () => {
	const elements = [
		{ image: img1 },
		{ image: img2 },
		{ image: img3 },
		{ image: img4 },
		{ image: img5 },
		{ image: img6 },
	];
	return (
		<div className="overflow-x-hidden w-full bg-[#DFDFDF]">
			<NavBar />
			<h1 className="text-center text-3xl font-semibold">Home page</h1>
			<div className="home flex w-screen justify-center">
				<div className="home-product-cards sm:w-[90%] flex flex-wrap justify-center flex-row">
					{elements.map((element, index) => (
						<ProductCard key={index} image={element.image} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home
