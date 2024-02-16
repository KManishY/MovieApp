import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-white text-2xl font-bold">Movie Booking</Link>
      </div>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Movies</Link>
        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
