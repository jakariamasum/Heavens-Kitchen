import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="https://i.ibb.co/4KQqPtD/oops-404-error-with-broken-robot-concept-illustration-114360-5529.jpg" alt="404 Error" className="w-96" />
      <h1 className="text-4xl font-bold text-gray-800 my-8">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-800 mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out">
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
