import React from 'react';
import { Link } from 'react-router-dom';
function ErrorPage() {
  return (
    <div className="bg-[url('./assets/images/background.svg')] poppins-regular overflow-hidden bg-cover w-[100%] min-h-[100vh] h-[100vh] bg-no-repeat flex justify-center items-center">
      <div className="w-max  text-white rounded-md px-10 py-8 max-h-max bg-[#242424]">
        <h1 className="text-2xl">
          {' '}
          😐 Oops !{' '}
          <span className="text-[#ff4400] font-medium">Error 404 </span>
          Page Not Found
        </h1>
        <Link
          to="/"
          className="block text-center hover:bg-[#4466af] p-2 rounded-md mt-4 bg-[#4B72C2]">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
