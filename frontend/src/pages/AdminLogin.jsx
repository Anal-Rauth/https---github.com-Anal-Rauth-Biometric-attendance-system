import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Auth.css";

const AdminLogin = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Predefined admin credentials
    const ADMIN_CREDENTIALS = {
        fullName: "ABC",
        email: "abc@gmail.com",
        password: "abc@1234"
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Validate Full Name, Email, and Password
        if (
            fullName === ADMIN_CREDENTIALS.fullName &&
            email === ADMIN_CREDENTIALS.email &&
            password === ADMIN_CREDENTIALS.password
        ) {
            // Save admin name in localStorage
            localStorage.setItem("adminName", ADMIN_CREDENTIALS.fullName);

            // Redirect to homepage
            navigate("/");
        } else {
            alert("Invalid credentials! Please try again.");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Admin Login</h2>
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
                        placeholder="Admin Email"
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
                    <button type="submit" className="auth-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
