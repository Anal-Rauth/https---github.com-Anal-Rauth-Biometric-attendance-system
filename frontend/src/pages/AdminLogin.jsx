import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Keeping the same design

const AdminLogin = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login & Signup

    const navigate = useNavigate();

    // Predefined admin credentials
    const ADMIN_CREDENTIALS = {
        fullName: "ABC",
        email: "abc@gmail.com",
        password: "abc@1234",
    };

    // Handle Login or Signup
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            // Simulating Sign Up (For demo purpose only)
            alert("Sign Up Successful! Please login.");
            setIsSignUp(false);
        } else {
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
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isSignUp ? "Admin Signup" : "Admin Login"}</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="auth-btn">
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>
                </form>

                {/* Toggle between Login and Signup */}
                <p className="toggle-text">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <span
                        className="toggle-link"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? "Login" : "Sign Up"}
                    </span>
                </p>

                {/* Go Back Button */}
                <button className="auth-btn go-back-btn" onClick={() => navigate(-1)}>
                    Go back
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;
