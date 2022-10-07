import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center space-y-8 md:w-1/2">
        <h3 className="text-white font-[cursive] text-center uppercase text-[38px] md:text-[68px] font-semibold text-gray-400">
          json generator
        </h3>
        <p className="text-white text-[28px] text-center font-semibold md:text-[40px]">
          Seamlessly visualize your JSON data instantly into graphs.
        </p>
        <Link
          to={"/register"}
          type="button"
          className="py-2.5 px-5 mr-2 mt-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
