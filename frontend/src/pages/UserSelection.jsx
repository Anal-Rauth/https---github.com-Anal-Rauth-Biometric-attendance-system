import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const UserSelection = () => {
    const navigate = useNavigate();

    return (
        <div className="user-selection-container">
            <h2 className="user-selection-title">Choose Your Role</h2>
            <div className="button-container">
                <button
                    className="user-btn admin-btn"
                    onClick={() => navigate("/admin-login")}
                >
                    Admin
                </button>
                <button
                    className="user-btn old-user-btn"
                    onClick={() => navigate("/old-user")}
                >
                    Old User
                </button>
                <button
                    className="user-btn new-user-btn"
                    onClick={() => navigate("/new-user")}
                >
                    New User
                </button>
            </div>
        </div>
    );
};

export default UserSelection;
