import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContaxt } from "../../contaxt/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContaxt);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">JhonnyBooking</span>
        </Link>
        {user ? (
          <div>{user.username}</div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to="/login" className="navButton">
              LogIn
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
