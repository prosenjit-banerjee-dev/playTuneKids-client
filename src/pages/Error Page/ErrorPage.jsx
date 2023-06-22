import React from "react";
import img404 from'../../assets/download.png'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-pink-500 to-purple-500">
      <img
        src={img404}
        alt="Error Image"
        className="w-56 h-56 rounded-full bg-white p-4 mb-8 shadow-lg"
      />
      <h1 className="text-6xl text-white mb-4">404</h1>
      <span className="text-white mb-4 text-2xl">Page Not Found</span>
      <h1 className="text-4xl font-bold text-white mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-white text-center mb-8">
        We apologize for the inconvenience. There seems to be an error.
      </p>
      <Link
        to="/"
        className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
