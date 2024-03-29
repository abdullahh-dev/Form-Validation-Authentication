import React, { useState } from 'react';
import { useFormik } from 'formik';
import { MdEmail } from 'react-icons/md';
import { IoMdKey } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
function Login() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prev) => {
      setPasswordVisibility(!prev);
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="w-[360px] login-form rounded-md px-10 py-8 max-h-max bg-[#242424]">
      <div className="flex items-center gap-1">
        <img src={logo} className="w-5 inline" alt="" />{' '}
        <p className="inline text-[20px] text-white poppins-medium">
          ab<span className="poppins-bold text-[#4B72C2]">.</span>
        </p>
      </div>
      <h1 className="text-white text-center mb-6 poppins-bold text-2xl">
        Login
      </h1>
      <form onSubmit={handleLogin} action="Login.jsx">
        <div className="relative mb-4">
          <span className="peer-focus:text-[#7F7F7F] text-white opacity-80  text-[12px]">
            Email
          </span>
          <input
            autoFocus
            autoComplete="off"
            className="peer opacity-80 placeholder:text-[12px] placeholder:text-[#7F7F7F]"
            placeholder="Type Your Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <MdEmail className="text-[#7F7F7F] text-[16px] peer-focus:text-[#4B72C2] icon absolute top-[31px]" />
        </div>
        <div className="relative mb-2">
          <span className=" text-white opacity-80  text-[12px]">Password</span>
          <input
            autoComplete="off"
            className="peer opacity-80 placeholder:text-[12px] placeholder:text-[#7F7F7F]"
            placeholder="Type Your Password"
            name="password"
            type={isPasswordVisible ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <IoMdKey className="text-[#7F7F7F] text-[16px] peer-focus:text-[#4B72C2] icon absolute top-[32px]" />
          <span
            onClick={togglePasswordVisibility}
            className="text-[#7F7F7F] cursor-pointer hover:text-[#4B72C2] absolute right-0 text-[12px] top-[32px]">
            {isPasswordVisible ? <IoEye /> : <IoEyeOff />}
          </span>
        </div>
        <a
          href="!#"
          className="text-[11px] text-[#7F7F7F] hover:underline text-right">
          <p className="mb-6">Forget Password?</p>
        </a>
        <button
          type="submit"
          className="block py-[6px] mb-1 text-white rounded-md hover:bg-[#4466af] bg-[#4B72C2] w-full">
          Login
        </button>
        <p className="text-[12px] text-center inline mt-2 text-white opacity-80">
          Don't Have An Account?{' '}
        </p>
        <Link to="/signup" className="text-[#4B72C2] text-[12px]">
          Create Account
        </Link>
      </form>
    </div>
  );
}

export default Login;
