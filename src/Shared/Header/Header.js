import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AUthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }

    const menuItems = <>
        <li className='font-semibold mr-2'><Link to='/'>Home</Link></li>
        <li className='font-semibold'>
                        <Link to='/blog'>
                            <button className="btn btn-success">Blog</button>
                        </Link>
                    </li>
        {
            user?.uid ?
                <>
                    <li className='font-semibold'><Link to='/allrecipe' className="btn btn-warning mr-4">All Recipe</Link>  </li>
                    <li className='font-semibold'><Link to='/myreview' className="btn btn-warning mr-4">My Review</Link>  </li>
                    <li className='font-semibold'><Link to='/addservice' className="btn btn-warning mr-4">Add Service</Link>  </li>
                    <li className='font-semibold'><button onClick={handleLogOut} className="btn btn-warning mr-4">Sign Out</button></li>
                </>

                :
                <>
                    <li className='font-semibold'>
                        <Link to='/login'>
                            <button className="btn btn-success">LogIn</button>
                        </Link>
                    </li>
                    <li className='font-semibold'>
                        <Link to='/signup'>
                            <button className="btn btn-success">SIgnUp</button>
                        </Link>
                    </li>
                </>
        }


    </>
    return (
        <div className="navbar h-20 mb-12 py-12 bg-slate-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    Unique Recipe
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
           
        </div>
    );
};

export default Header;