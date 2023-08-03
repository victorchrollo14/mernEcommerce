import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="w-screen h-16 bg-green-500 flex items-center">
        <nav className="text-slate-900 text-lg flex">
            <Link to='/'><button className="ml-4 hover:text-white">Home</button></Link>
            <Link to='/shop'><button className="ml-4 hover:text-white">Shop</button></Link>
            <Link to='/cart'><button className="ml-4 hover:text-white">Cart</button></Link>
        </nav>
    </div>
  )
}

export default NavBar