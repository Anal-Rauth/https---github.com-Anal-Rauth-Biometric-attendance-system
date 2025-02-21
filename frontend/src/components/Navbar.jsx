import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg"; // Import the logo image

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Biometric Attendance Logo" className="logo" />
            </div>
            <div className="nav-links">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/register">Register</Link>
                <Link className="nav-link" to="/check-attendance">Check Attendance</Link>
            </div>
        </nav>
    );
};

export default Navbar;
