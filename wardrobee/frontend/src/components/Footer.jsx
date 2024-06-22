import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} Clothes Inventory. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
