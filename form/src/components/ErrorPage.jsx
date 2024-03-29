import React from 'react';

function ErrorPage() {
  return (
    <div className="bg-[url('./assets/images/background.svg')] poppins-regular overflow-hidden bg-cover w-[100%] min-h-[100vh] h-[100vh] bg-no-repeat flex justify-center items-center">
      <div className="w-[360px] text-white rounded-md px-10 py-8 max-h-max bg-[#242424]">
        Oops ! Error 404 Not Found
      </div>
    </div>
  );
}

export default ErrorPage;
