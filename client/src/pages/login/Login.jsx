import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
	const [login, setLogin] = useState(false);
	function handleLogin() {
		setLogin(true);
	}
	function handleRegister() {
		setLogin(false);
	}
	return (
		<div>
			<h2 className='text-center font-semibold text-2xl mt-4'>Your Account</h2>
			<div className="form w-screen flex items-center flex-col mt-12">
				<div className="relative right-24 text-lg md:my-7 md:text-2xl"><span className={login ? "text-[#6e6868]  underline cursor-pointer" : "cursor-pointer"} onClick={handleLogin}>LOG IN</span> <span className={!login ? "text-[#6e6868]  underline relative left-4 cursor-pointer" : "relative left-4 cursor-pointer"} onClick={handleRegister}>REGISTER</span></div>
				{!login && <input type="text" placeholder='Full Name' className='border-2 p-4 w-80 text-[#A7A7A7] my-2 border-[#A7A7A7] text-xl rounded-xl' />}
				<input type="email" placeholder='Email Address' className='border-2 p-4 w-80 my-2 text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl' />
				<input type="password" placeholder='Password' className='border-2 p-4 w-80 my-2 text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl' />
				{!login && <input type="password" placeholder='Confirm Password' className='border-2 p-4 w-80 my-2 text-[#A7A7A7] border-[#A7A7A7] text-xl rounded-xl' />}
				<button className='bg-[#1E1E1E] text-white px-[6.5rem] my-4 py-4 text-2xl hover:bg-[#B5AA8F] transition'>{login ? "LOGIN" : "REGISTER"}</button>

				<div className='text-center text-2xl font-semibold my-6 flex'> <hr className='bg-black w-32 h-[3px] relative top-3 right-1' /> OR <hr className='bg-black w-32 h-[3px] relative top-3 left-1' /></div>
				<button className='flex text-2xl text-[#6e6868] border-2 border-[#A7A7A7] p-5 rounded-xl'><FcGoogle className='relative top-1 mx-2' /> {login ? "Login" : "Register"} with Google</button>
			</div>
		</div >
	)
}

export default Login
