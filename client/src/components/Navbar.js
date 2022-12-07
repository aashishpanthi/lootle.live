import { Button } from "@mui/material";
import Logo from "./Logo";
import "./styles/navbar.css";
import { useCallback } from "react";
import { useSignOut } from "@nhost/react";
import { useNavigate } from "react-router-dom";
import { useAuthenticationStatus } from "@nhost/react";
import GoogleIcon from "@mui/icons-material/Google";

const Navbar = ({ nhost }) => {
  const { isAuthenticated } = useAuthenticationStatus();

  const navigate = useNavigate();
  const { signOut } = useSignOut();

  const logout = useCallback(() => {
    signOut();
    navigate("/");
  }, [navigate]);

  const handleGoogleSignIn = () => {
    nhost.auth.signIn({
      provider: "google",
    });
  };

  return (
    <nav className="navbar">
      <Logo name={true} />
      {isAuthenticated ? (
        <Button variant="outlined" color="warning" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button variant="outlined" color="primary" onClick={handleGoogleSignIn}>
          <GoogleIcon
            sx={{
              mr: 1,
            }}
          />{" "}
          Login
        </Button>
      )}
    </nav>
  );
};
export default Navbar;
