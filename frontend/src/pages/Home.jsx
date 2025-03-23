import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [adminName, setAdminName] = useState("");
    const navigate = useNavigate();

    // Get admin name from localStorage on page load
    useEffect(() => {
        const storedName = localStorage.getItem("adminName");
        if (storedName) {
            setAdminName(storedName);
        }
    }, []);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("adminName");  // Remove admin name from storage
        setAdminName("");  // Reset state
        navigate("/user-selection");  // Redirect to login page
    };

    return (
        <div className="home-container">
            {/* Show welcome message only if an admin is logged in
            {adminName ? (
                <>
                    <h2 className="home-welcome">Welcome, {adminName}</h2>
                    <button onClick={handleLogout} className="home-btn logout-btn">Logout</button>
                </>
            ) : (
                <h2 className="home-welcome">Please Log In</h2>
            )} */}

            <h1 className="home-title">Welcome to the Biometric Attendance System</h1>
            <p className="home-description">
                A modern solution for managing attendance using biometrics.
            </p>
            <div className="home-buttons">
                <a href="/register" className="home-btn">Register Biometrics</a>
                <a href="/check-attendance" className="home-btn">Check Attendance</a>
            </div>

            {/* Show login/signup link only if no admin is logged in
            {!adminName && <Link to="/user-selection" className="auth-link">Go to Login / Sign Up</Link>} */}
        </div>
    );
};

export default Home;
