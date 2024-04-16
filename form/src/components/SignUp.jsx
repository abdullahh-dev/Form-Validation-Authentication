import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../Schema/validations';
import logo from '../assets/images/logo.svg';
import { createUser } from '../apis/users';
import { Link } from 'react-router-dom';
function SignUp() {
  const onSubmit = (values, actions) => {
    createUser(values);
    actions.resetForm();
  };
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className="w-[360px] signup-form rounded-md px-10 py-8 max-h-max bg-[#242424]">
      <div className="flex items-center gap-1">
        <img src={logo} className="w-5 inline" alt="" />{' '}
        <p className="inline text-[20px] text-white poppins-medium">
          ab<span className="poppins-bold text-[#4B72C2]">.</span>
        </p>
      </div>
      <h1 className="text-white text-center mb-6 poppins-bold text-2xl">
        Sign up
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="relative text-white  mb-4">
          <span className="peer-focus:text-[#7F7F7F] opacity-80  text-[12px]">
            Full Name
          </span>
          <input
            autoComplete="off"
            className={`peer border-b-[1.8px] w-full py-[4px] px-[0px] border-white focus:outline-none focus:border-[#71a0fd]  opacity-80 placeholder:text-[12px] placeholder:text-[#7F7F7F]`}
            placeholder="Type your fullname"
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span
            className={`text-[12px] absolute ${
              errors.fullname && touched.fullname ? 'block' : 'hidden'
            } text-red-600`}>
            {errors.fullname}
          </span>
        </div>
        <div className="relative text-white  mb-4">
          <span className="peer-focus:text-[#7F7F7F] opacity-80  text-[12px]">
            Username
          </span>
          <input
            autoComplete="off"
            className={`peer border-b-[1.8px] w-full py-[4px] px-[0px] border-white focus:outline-none focus:border-[#71a0fd]  opacity-80 placeholder:text-[12px] placeholder:text-[#7F7F7F]`}
            placeholder="Type your username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span
            className={`text-[12px] absolute ${
              errors.username && touched.username ? 'block' : 'hidden'
            } text-red-600`}>
            {errors.username}
          </span>
        </div>
        <div className="relative text-white  mb-4">
          <span className="peer-focus:text-[#7F7F7F] opacity-80 text-[12px]">
            Email
          </span>
          <input
            autoComplete="off"
            className={`peer border-b-[1.8px] w-full py-[4px] px-[0px] border-white focus:outline-none focus:border-[#71a0fd]  placeholder:text-[12px] placeholder:text-[#7F7F7F]`}
            placeholder="Type your email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span
            className={`text-[8px] absolute ${
              errors.email && touched.email ? 'block' : 'hidden'
            } text-red-600`}>
            {errors.email}
          </span>
        </div>
        <div className="relative text-white mb-4">
          <span className="opacity-80  text-[12px]">Password</span>
          <input
            className={`peer border-b-[1.8px]  w-full py-[4px] pr-[39px] border-white   focus:outline-none focus:border-[#71a0fd] placeholder:text-[12px] placeholder:text-[#7F7F7F]`}
            placeholder="Type your password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="absolute right-0 bottom-4 overflow-hidden w-9 h-1 rounded-full bg-[#404040]">
            <span
              className={`block rounded-full  h-full transition-all duration-300 linear ${
                errors.password &&
                values.password.length > 0 &&
                'w-[50%] bg-red-700'
              } ${values.password.length === 0 && 'w-0 bg-red-700'} ${
                !errors.password &&
                values.password.length > 0 &&
                'w-full bg-emerald-500'
              } `}></span>
          </span>
          <span
            className={`text-[8px] absolute ${
              errors.password && touched.password ? 'block' : 'hidden'
            } text-red-600`}>
            {errors.password}
          </span>
        </div>
        <div className="relative text-white mb-8">
          <span className=" opacity-80 text-[12px]">Confirm Password</span>
          <input
            className={`peer border-b-[1.8px] w-full py-[4px] px-[0px] border-white focus:outline-none focus:border-[#71a0fd] placeholder:text-[12px] ${
              errors.confirmPassword &&
              touched.confirmPassword &&
              'border-red-600'
            } placeholder:text-[#7F7F7F]`}
            placeholder="Re-type your password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span
            className={`text-[8px] absolute  translate-y-[1px] ${
              errors.confirmPassword && touched.confirmPassword
                ? 'block'
                : 'hidden'
            } text-red-600`}>
            {errors.confirmPassword}
          </span>
        </div>

        <button
          type="submit"
          className="block relative py-[6px] mb-1 disabled:bg-[#83acff] text-white rounded-md hover:bg-[#324c83] bg-[#4B72C2] w-full">
          Sign up
        </button>
        <p className="text-[12px] text-center inline mt-2 text-white opacity-80">
          Already Signed up?{' '}
        </p>
        <Link to="/login" className="text-[#71a0fd] text-[12px]">
          Login
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
