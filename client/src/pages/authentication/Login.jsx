import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer'
import loginimg from '../../assets/login-side-img.png'

const Login = () => {
	return (
		<div className='bg-[#DFDFDF] overflow-x-hidden'>
			<NavBar />
			<div className='flex flex-col md:flex-row w-screen items-center justify-between mt-10'>
				<div className='md:ml-10'>
					<img src={loginimg} alt="model-image" className='w-[250px] md:w-[850px] mx-5 md:relative md:top-28' />
					<div className='text-xl relative left-6 bottom-32 font-medium text-white md:text-7xl md:bottom-72 md:left-9'>Where Comfort Meets <br />
						Style. Your Everyday <br /> Fashion Hub.</div>
				</div>
				<div className="form flex items-center flex-col bg-white p-2 md:py-5 rounded-xl md:mr-40 md:w-[550px]">
					<h2 className='text-center font-medium text-2xl my-8 md:text-4xl'>Login</h2>
					<div className='md:text-2xl my-5'>Not Registered yet? <span className='text-red-600'>Register</span></div>
					<button className='flex my-4 text-2xl md:pl-14 text-white bg-[#24292F] outline-none border-2 border-[#A7A7A7] px-2 md:w-[400px] py-4  rounded-xl'><FaGithub className='relative top-1 mx-2' />Login with Github</button>
					<button className='flex text-2xl text-[#6e6868] border-2 outline-none border-[#A7A7A7] px-2 py-4 md:w-[400px] md:pl-14 rounded-xl'><FcGoogle className='relative top-1 mx-2' />Login with Google</button>
					<div className='text-center text-2xl font-semibold my-6 flex'> <hr className='bg-black w-28 h-[3px]  md:w-44 relative top-3 right-1' /> OR <hr className='bg-black w-28 h-[3px] md:w-44  relative top-3 left-1' /></div>
					<input type="email" placeholder='Email Address' className='border-2 p-4 w-60 my-2 text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl md:w-[400px]' />
					<input type="password" placeholder='Password' className='border-2 p-4 w-60 my-2 text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl md:w-[400px]' />
					<button className='bg-[#1E1E1E] md:px-40 text-white px-20 my-4 py-4 text-2xl hover:bg-[#B5AA8F] transition'>LOGIN</button>
					<span className='text-[#757373] relative right-14 md:right-28 md:text-xl'>Forgot password</span>
				</div>

			</div>
			<Footer />
		</div >
	)
}

export default Login
