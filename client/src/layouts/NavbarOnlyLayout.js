import Navbar from "../components/Navbar";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthenticationStatus } from "@nhost/react";
import { CircularProgress } from "@mui/material";

const NavbarOnlyLayout = ({ nhost }) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const location = useLocation();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <>
      <Navbar nhost={nhost} />
      <Outlet />
    </>
  );
};

export default NavbarOnlyLayout;
