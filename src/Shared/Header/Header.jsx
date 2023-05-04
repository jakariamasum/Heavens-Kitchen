import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        <Navigate to='/login'></Navigate>
      })
      .catch((error) => {});
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Heaven's Kitchen
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost sm:hidden" onClick={toggleMenu}>
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`menu menu-horizontal px-1 gap-2 sm:flex ${showMenu ? 'block' : 'hidden'}`}>
            <li>
              <Link
                to="/"
                className={`${location.pathname === '/' ? 'bg-indigo-500 text-white' : ''}`}
              >
                <span className="hidden sm:inline">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`${location.pathname === '/blog' ? 'bg-indigo-500 text-white' : ''}`}
              >
                <span className="hidden sm:inline">Blog</span>
              </Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className={`${location.pathname === '/login' ? 'bg-indigo-500 text-white' : ''}`}
                  >
                    <span className="hidden sm:inline">Login</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className={`${location.pathname === '/register' ? 'bg-indigo-500 text-white' : ''}`}
                  >
                    <span className="hidden sm:inline">Register</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="#">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={user.photoURL} alt={user.displayName} />
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLogOut}>
                    <span className="hidden sm:inline">LogOut</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
