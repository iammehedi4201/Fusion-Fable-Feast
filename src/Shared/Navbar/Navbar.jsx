import React, { useContext } from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useCart from '../../Hooks/useCart';
import logo from '../../assets/shop/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [cart, isLoading, isError, refetch] = useCart();


    const navOptions = <>
        <li><Link className='hover:text-yellow-500 hover:bg-black font-medium' to='/'>Home</Link></li>
        <li><Link className='hover:text-yellow-500 hover:bg-black font-medium ' to='/menu'>Our Menu</Link></li>
        <li><Link className='hover:text-yellow-500 hover:bg-black font-medium ' to='/order/SALAD'>Order Food</Link></li>
        {/* <li tabIndex={0}>
            <details >
                <summary>Parent</summary>
                <ul className="p-2 text-black w-36">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li> */}
        <li><Link className='hover:text-yellow-500 hover:bg-black font-medium'>Contrct Us </Link></li>
    </>

    return (
        <div className=''>
            <div className="navbar max-w-screen-2xl fixed z-20 bg-opacity-80 bg-neutral text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl ">
                        <img className='w-full h-full object-cover' src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-evenly w-full h-full">
                        <div className="dropdown dropdown-end mx-5 w-full h-full ">
                            <label onClick={() => navigate('/dashboard/mycart')} tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{cart?.length || 0}</span>
                                </div>
                            </label>
                        </div>
                        {
                            user?.email ? <div className="dropdown dropdown-end mx-5">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || user?.user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                                    <li>
                                        <a className="justify-between hover:text-orange-500">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li>
                                        <a className="justify-between hover:text-orange-500">
                                            {user?.email}
                                        </a>
                                    </li>
                                    <li>
                                        <a className="justify-between hover:text-orange-500">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><button className='btn btn-sm text-center btn-primary hover:bg-orange-500 hover:text-white' onClick={async () => {
                                        try {
                                            await logOut();
                                        } catch (error) {
                                            console.log(error);
                                        }
                                    }}>Logout</button></li>
                                </ul>
                            </div> : <Link to='/login' className="btn  w-24 btn-primary mx-5 my-auto">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;