import { React, use } from "react";
import { Link, NavLink } from "react-router";
import { Context } from "../../Context/Context";

const NavBar = () => {
  const { user, handleSignOut } = use(Context);

  // LogOut section
  const handleLogOut = () => {
    handleSignOut()
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Log in</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/dasbord">Dasbord</NavLink>
            {user && (
              <>
                <NavLink to="/about">About</NavLink>

                <NavLink to="/blog">Blog</NavLink>
              </>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-7 px-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/dasbord">Dasbord</NavLink>
          {user && (
            <>
              <NavLink to="/about">About</NavLink>

              <NavLink to="/blog">Blog</NavLink>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a onClick={handleLogOut} className="btn">
            Log Out
          </a>
        ) : (
          <Link className="btn" to="/login">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
