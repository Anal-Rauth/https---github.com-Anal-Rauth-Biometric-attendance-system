import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Auth.css";

const RegisterBiometric = () => {
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await fetch("http://localhost:5000/register-biometric", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: "John Doe" }),
            });


            if (response.ok) {
                // ✅ Redirect to /user-selection after successful registration
                navigate("/user-selection");
            } else {
                alert("Error registering biometrics. Try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="home-container">
            <div className="register-container">
                <h2 className="register-title">Register Your Biometrics</h2>
                <button className="register-btn" onClick={handleRegister}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegisterBiometric;
