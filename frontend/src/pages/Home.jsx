import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Biometric Attendance System</h1>
            <p className="home-description">
                A modern solution for managing attendance using biometrics.
            </p>
            <div className="home-buttons">
                <a href="/register" className="home-btn">Register Biometrics</a>
                <a href="/check-attendance" className="home-btn">Check Attendance</a>
            </div>
            <Link to="/auth" className="auth-link">Go to Login / Sign Up</Link>
        </div>
    );
};

export default Home;
