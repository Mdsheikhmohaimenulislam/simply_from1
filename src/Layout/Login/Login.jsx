import React, { use, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Context } from "../../Context/Context";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { handleLogin } = use(Context);
  const location = useLocation();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleLoginBtn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // login section
    handleLogin(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="card bg-white-100  mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLoginBtn} className="fieldset">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <div className="relative">
            <label className="label">Password</label>
            <input
              name="password"
              type={show? "text" : "password"}
              className="input"
              placeholder="Password"
            />
            <button className="absolute mt-4 -ml-7" onClick={() => setShow(!show)}>
             {
              show?  <FaEye /> : <FaEyeSlash />
             }
              </button>
          </div>
          <p className="ml-0 text-sm text-center dark:text-gray-600">
            New to this site? please
            <a
              onClick={() => navigate("/signup")}
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-default-600 text-blue-500
              "
            >
              Sign Up
            </a>
            .
          </p>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
