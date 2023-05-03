import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  const { user,logOut } = useContext(AuthContext)
   console.log(user)
  const isActiveRoute = (routePath) => {
    const { pathname } = useLocation();
    return pathname === routePath;
  };

  const handleLogOut=()=>{
    logOut()
    .then(() => {})
    .catch((error) => {});
  }

  return (
    <div className="mx-32">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Heaven's Kitchen</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link to='/' className={`${isActiveRoute('/') ? "bg-indigo-500 text-white" : ""}`}>Home</Link></li>
            <li><Link to='/blog' className={`${isActiveRoute('/blog') ? "bg-indigo-500 text-white" : ""}`}>Blog</Link></li>
            {
              !user ? <li><Link to='/login' className={`${isActiveRoute('/login') ? "bg-indigo-500 text-white" : ""}`}>Login</Link></li> : <div><div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={user?user.photoURL:''}/>
                </div>
              </div></div>
            }
            {
              !user ? <li><Link to='/register' className={`${isActiveRoute('/register') ? "bg-indigo-500 text-white" : ""}`}>Register</Link></li> : <li onClick={handleLogOut} className='text-indigo-5000'><Link >LogOut</Link></li>
            }</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;