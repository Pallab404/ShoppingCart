import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const cart = useSelector((state)=> state.cart.cart);
  return (
    <div>
        <nav className="flex justify-between items-center max-w-6xl mx-auto h-20 ">
            <NavLink to="/">
                <div>
                    <img src="/logo.jpg" alt="Logo" className="h-14 ml-2" />
                </div>
            </NavLink>
            <div className="flex items-center relative mr-5 space-x-6 text-white font-bold">
                <NavLink to="/">
                    <p className="hover:text-green-400">Home</p>
                </NavLink>
                <NavLink to="/Cart">
                    <MdOutlineLocalGroceryStore className="text-2xl hover:text-green-400" />
                    {
                        cart.length >0 && 
                        <span className="absolute top-[-15px] right-[-5px] text-green-300">{cart.length}</span>
                    }
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
