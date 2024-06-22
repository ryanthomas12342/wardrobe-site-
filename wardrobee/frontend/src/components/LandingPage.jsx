import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold my-6">
          Manage Your Wardrobe Effortlessly
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Organize your clothes by category, color, and more. Keep track of your
          wardrobe with ease.
        </p>
        <div>
          <a
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
