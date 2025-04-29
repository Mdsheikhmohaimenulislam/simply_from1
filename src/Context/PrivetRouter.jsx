import React, { use } from "react";
import { Context } from "./Context";
import { Navigate } from "react-router";
import { useLocation } from "react-router";


const PrivetRouter = ({ children }) => {


  const { user, loading } = use(Context);
  const location = useLocation()
  console.log(location.pathname);


  if (loading) {
    return <span className=" loading loading-ring loading-xl"></span>
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivetRouter;
