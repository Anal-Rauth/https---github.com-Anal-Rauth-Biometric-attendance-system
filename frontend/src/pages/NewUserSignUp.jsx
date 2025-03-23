import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Using the same styles for consistency

const NewUserSignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        // Check if required fields are filled
        if (!fullName || !email || !password) {
            alert("Please fill out all fields!");
            return;
        }

        // Get registered users from localStorage
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        // Check if user with the same email already exists
        const isUserExists = registeredUsers.some((user) => user.email === email);
        if (isUserExists) {
            alert("User with this email is already registered. Please log in.");
            navigate("/old-user");
            return;
        }

        // Add new user to registered users list
        const newUser = { fullName, email, password };
        registeredUsers.push(newUser);

        // Save updated user list in localStorage
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

        // Show confirmation message
        alert("Registration successful! You can now log in.");

        // Redirect to Old User Login page
        navigate("/old-user");
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>New User Registration</h2>
                <form onSubmit={handleSignUp}>
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
                        placeholder="Email"
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
                        Sign Up
                    </button>
                </form>

                {/* Go Back Button */}
                <button
                    className="go-back-btn"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NewUserSignUp;
