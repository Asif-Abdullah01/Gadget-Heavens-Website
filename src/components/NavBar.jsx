
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
    const {pathname} = useLocation();
    // console.log(pathname);
    const navigate = useNavigate();
    return (
        <div className={`backdrop-blur-sm ${pathname ==='/'? 'bg-[#9538E2] text-white w-11/12 mx-auto' : 'bg-white text-black'} sticky top-0 py-2 z-50`}>
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#9538E2] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                             <NavLink className={({isActive})=> `${isActive ? 'text-[#9538E2] bg-yellow-50 px-2 py-1 rounded-xl font-bold':''}`} to={'/'}>Home</NavLink>
                        <NavLink className={({isActive})=> `${isActive ? 'text-[#9538E2] bg-yellow-50 px-2 py-1 rounded-xl font-bold':''}`} to={'/statistics'}>Statistics</NavLink>
                        <NavLink className={({isActive})=> `${isActive ? 'text-[#9538E2] bg-yellow-50 px-2 py-1 rounded-xl font-bold':''}`} to={'/dashboard'}>Dashboard</NavLink>
                        <NavLink className={({isActive})=> `${isActive ? 'text-[#9538E2] bg-yellow-50 px-2 py-1 rounded-xl font-bold':''}`} to={'/about'}>About Us</NavLink>
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8 text-lg">
                        <NavLink className={({isActive})=> `${isActive ? 'text-[#9538E2] bg-yellow-50 px-2 py-1 rounded-xl font-bold':''}`} to={'/'}>Home</NavLink>
                        <NavLink className={({isActive})=> `${isActive ? 'text-[#9538E2] bg-yellow-50 px-2 py-1 rounded-xl font-bold':''}`} to={'/statistics'}>Statistics</NavLink>
                        <NavLink className={({isActive})=> `${isActive ? 'text-[#9538E2] bg-yellow-50 px-2 py-1 rounded-xl font-bold':''}`} to={'/dashboard'}>Dashboard</NavLink>
                        <NavLink className={({isActive})=> `${isActive ? 'text-[#9538E2] bg-yellow-50 px-2 py-1 rounded-xl font-bold':''}`} to={'/about'}>About Us</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-2">
          
                        <MdOutlineShoppingCart onClick={() => navigate('/dashboard')} className="text-black bg-white rounded-full p-2 border cursor-pointer" size={42} />
                        <CiHeart onClick={() => navigate('/dashboard')} className="text-black bg-white rounded-full p-2 border cursor-pointer" size={42} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;