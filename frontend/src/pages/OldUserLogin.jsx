import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Same CSS for consistency

const OldUserLogin = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Predefined old user credentials (for demo purposes)
    const USER_CREDENTIALS = {
        fullName: "John Doe",
        email: "john@gmail.com",
        password: "john1234",
    };

    // Handle Login
    const handleLogin = (e) => {
        e.preventDefault();

        // Validate Full Name, Email, and Password
        if (
            fullName === USER_CREDENTIALS.fullName &&
            email === USER_CREDENTIALS.email &&
            password === USER_CREDENTIALS.password
        ) {
            // Save user name in localStorage
            localStorage.setItem("userName", USER_CREDENTIALS.fullName);

            // Redirect to homepage or user dashboard
            navigate("/fingerprint-scan"); // You can replace with "/user-dashboard" if needed
        } else {
            alert("Invalid credentials! Please try again.");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Old User Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="auth-input"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="User Email"
                        className="auth-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="auth-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="auth-btn">
                        Login
                    </button>
                </form>

                {/* Go Back Button */}
                <button className="auth-btn go-back-btn" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default OldUserLogin;
