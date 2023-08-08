import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'


const Reviews = () => {
	const [reviewCount, setReviewCount] = useState(0);

	const handleReview = (event) => {
		if (event.target.getAttribute("value") === 'Next') {
			if (reviewCount < 3) {
				setReviewCount((prev) => prev + 1)
			}
			else {
				setReviewCount(0)
			}
		}
		if (event.target.getAttribute("value") === 'Prev') {
			if (reviewCount > 0) {
				setReviewCount((prev) => prev - 1)
			}
			else {
				setReviewCount(3)
			}
		}
	}
	const reviews = [
		{
			"review": "Amazing experience! The service was top-notch, and the atmosphere was cozy.",
			"rating": 5,
			"name": "Jessica Adams",
			"occupation": "Graphic Designer",
			"image": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg"
		},
		{
			"review": "Great place to unwind after a long day. The staff is friendly and attentive.",
			"rating": 4,
			"name": "Michael Johnson",
			"occupation": "Software Engineer",
			"image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
		},
		{
			"review": "Had an excellent time here. The food was delicious, and the live music was a treat.",
			"rating": 5,
			"name": "Emily Roberts",
			"occupation": "Musician",
			"image": "https://images.unsplash.com/photo-1568312364058-d8b2a621db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80"
		},
		{
			"review": "Decent experience overall. The ambiance could be improved, but the drinks were good.",
			"rating": 3,
			"name": "Alex Carter",
			"occupation": "Accountant",
			"image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
		}
	]

	const filledStars = Array.from({ length: reviews[reviewCount].rating }, (_, index) => (
		<FaStar key={index} className='text-yellow-400' />
	));


	return (
		<>
			<div className="review w-screen flex justify-center items-center flex-col bg-white">
				<div className="mt-8 text-2xl md:text-6xl md:w-full md:mt-28 w-52 text-center text-[#484848] font-Volkhov">This Is What Our Customers Say</div>
				<div className="text-center text-lg md:text-xl md:mt-8 text-[#8A8A8A] mx-3 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum.</div>
				<div className="w-72 border-[1px] border-black rounded-xl p-6 flex flex-col md:flex-row md:w-[800px] text-[#484848] mt-14">
					<div className="img md:w-1/2 flex h-64 overflow-hidden">
						<img className="m-auto w-full" src={reviews[reviewCount].image} alt="person" />
					</div>
					<div className="info flex justify-center items-center md:items-start md:ml-8 md:text-xl flex-col">
						<p className="text-center md:text-left md:w-60  my-2">"{reviews[reviewCount].review}"</p>
						<div className='flex my-3 text-lg'>{filledStars}</div>
						<hr className='w-2/3 mb-6 divide-black' />
						<p className='text-2xl md:text-3xl font-semibold'>{reviews[reviewCount].name}</p>
						<p className='my-3'>{reviews[reviewCount].occupation}</p>
					</div>
				</div>
				<div className='flex my-10 text-2xl'>
					<GrPrevious className='mx-5' value="Prev" onClick={() => handleReview(event)} />
					<GrNext className='mx-5' value="Next" onClick={() => handleReview(event)} />
				</div>
			</div>
		</>
	)
}

export default Reviews
