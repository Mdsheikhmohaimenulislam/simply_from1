import React, { use, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../Context/Context";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  
  const { createUser } = use(Context);
  const [show, setShow] = useState(false)

  const navigate = useNavigate();


  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    // Create User
    createUser(email,password)
    .then((result) => {
      navigate('/')
      console.log(result);
    }).catch(error => {
      console.log(error);
    })
  };

  return (
    <div className="flex flex-col max-w-md mx-auto mt-20 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-600">
          Sign in to access your account
        </p>
      </div>
      <form onSubmit={handleSignUp} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="text" className="block mb-2 text-sm">
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="text-sm ">
              Password
            </label>
            <input
              type={show? "text" : "password"}
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            <button onClick={() => setShow(!show)} className="absolute mt-3 -ml-7">
            {
              show? <FaEye /> : <FaEyeSlash />
            }
            </button>
          </div>
          <div className="flex justify-end mb-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-600"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-default-600 border text-black-50"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already have an account?
            <a
              onClick={() => navigate("/login")}
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-default-600 text-blue-500
              "
            >
              Log in
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
