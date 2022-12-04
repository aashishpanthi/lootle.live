import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthenticationStatus } from "@nhost/react";
import { CircularProgress } from "@mui/material";

const DefaultLayout = ({ nhost }) => {
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

  if (isAuthenticated) {
    return <Navigate to="/app" state={{ from: location }} replace />;
  }

  return (
    <>
      <Navbar nhost={nhost} />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
