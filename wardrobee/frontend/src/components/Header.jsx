import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Clothes Inventory</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/category/partywear" className="hover:underline">
                Partywear
              </a>
            </li>
            <li>
              <a href="/category/homeclothes" className="hover:underline">
                Home Clothes
              </a>
            </li>
            <li>
              <a href="/category/officewear" className="hover:underline">
                Office Wear
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href="/login"
            className="mr-2 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition duration-300"
          >
            <Link to="/new"> Add new Clothing</Link>
          </a>
          <a
            href="/login"
            className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition duration-300"
          >
            <Link to="/login"> Login</Link>
          </a>
          <a
            href="/signup"
            className="ml-2 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition duration-300"
          >
            <Link to="/signup">Sign Up</Link>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
