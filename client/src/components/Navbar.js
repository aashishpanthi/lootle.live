import { Button } from "@mui/material";
import Logo from "./Logo";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo name={true} />
      <Button variant="outlined" color="warning">
        Logout
      </Button>
    </nav>
  );
};
export default Navbar;
