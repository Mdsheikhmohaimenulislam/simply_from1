import React, { use } from "react";
import { useNavigate } from 'react-router';
import { Context } from "../../Context/Context";

const Login = () => {

  const {handleLogin} = use(Context)

  const navigate = useNavigate()

  const handleLoginBtn = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log("hi",email,password);


    // login section
    handleLogin(email,password)
    .then(result => {
      console.log(result);
    }).catch(error => {
      const errorMessage = error.message;
      console.log(errorMessage)
    })

  }

  return (
    <div className="card bg-white-100  mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLoginBtn} className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <p className="ml-0 text-sm text-center dark:text-gray-600">
            New to this site? please 
            <a
            onClick={() => navigate('/signup')}
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-default-600 text-blue-500
              "
            >
              Sign Up
            </a>
            .
          </p>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
