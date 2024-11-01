import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuth = false;
  // const jwt = true
  // const rol = "admin"
  return <div>{isAuth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default ProtectedRoutes;
