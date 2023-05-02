import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mx-32">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Heaven's Kitchen</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link>Home</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link>Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;