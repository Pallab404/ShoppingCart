import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <div className="flex flex-row justify-between">
            <NavLink to="/">
                <div>
                    <img src="/logo.jpg" alt="Logo" className="h-12 w-12" />
                </div>
            </NavLink>
            <div>
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/Cart">
                    <MdOutlineLocalGroceryStore />
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
