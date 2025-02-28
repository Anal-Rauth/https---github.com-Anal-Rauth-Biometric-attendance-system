import React from 'react';
import { Link } from 'react-router-dom';
import "./Auth.css";

const UserSelection = () => {
    return (
        <div className="selection-container">
            <h2>Select Your Role</h2>
            <div className="selection-buttons">
                <Link to="/admin-login" className="selection-btn">Admin</Link>
                <Link to="/auth" className="selection-btn">User</Link>
            </div>
        </div>
    );
};

export default UserSelection;
