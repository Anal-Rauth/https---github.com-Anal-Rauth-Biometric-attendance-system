import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Auth.css";

const CheckAttendance = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState(null);

    // Check if any user is logged in
    useEffect(() => {
        const adminName = localStorage.getItem("adminName");
        const userName = localStorage.getItem("loggedInUser");

        if (adminName) {
            setIsLoggedIn(true);
            setUserType("admin");
        } else if (userName) {
            setIsLoggedIn(true);
            setUserType("old user");
        }
    }, []);

    // Handle Check Attendance button click
    const handleCheckAttendance = () => {
        if (!isLoggedIn) {
            const userTypeInput = prompt(
                "Who are you? (Type 'Admin' or 'Old user')"
            );

            switch (userTypeInput?.toLowerCase()) {
                case "admin":
                    navigate("/admin-login");
                    break;
                case "old user":
                    navigate("/old-user");
                    break;
                default:
                    alert("Invalid option! Please type 'admin' or 'old user'.");
            }
        } else {
            // Check attendance for logged-in users
            if (userType === "admin") {
                alert("Generating Admin's Attendance Excel Sheet...");
                navigate("/generate-admin-excel"); // Redirect to Admin Excel Sheet Generation
            } else if (userType === "old user") {
                alert("Generating Your Attendance Excel Sheet...");
                navigate("/generate-user-excel"); // Redirect to User Excel Sheet Generation
            } else {
                alert("Invalid user type.");
            }
        }
    };

    return (
        <div className="home-container">
            <div className="check-attendance">
                <h2 className="title">Check Your Attendance</h2>
                <button className="attendance-btn" onClick={handleCheckAttendance}>
                    Check Attendance
                </button>
            </div>
        </div>
    );
};

export default CheckAttendance;
