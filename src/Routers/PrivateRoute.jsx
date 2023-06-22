import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";

const PrivateRoute = ({children}) => {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Button color="gray">
    <Spinner aria-label="Alternate spinner button example" />
    <span className="pl-3 text-xl">
      Loading...
    </span>
  </Button>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  } else {
    return children;
  }
};

export default PrivateRoute;
