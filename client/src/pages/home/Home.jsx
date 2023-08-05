import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import img1 from '../../assets/shirts.jpg'
import img2 from '../../assets/outwear.jpg'
import img3 from '../../assets/bottom.webp'
import img4 from '../../assets/sweater.webp'
import img5 from '../../assets/accesories.webp'
import img6 from '../../assets/footwear.webp'

const Home = () => {
	return (
		<div className=" overflow-x-hidden">
			<NavBar />
			<h1 className="text-center text-3xl font-semibold">Home page</h1>
			<div className="home flex w-screen ">
				<div className="home-product-cards w-4/5 mx-auto flex flex-wrap">
					<ProductCard image={img1} />
					<ProductCard image={img2} />
					<ProductCard image={img3} />
					<ProductCard image={img4} />
					<ProductCard image={img5} />
					<ProductCard image={img6} />
				</div>
			</div>
		</div>);
};

export default Home
