import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const FingerprintScan = () => {
    const [showNotification, setShowNotification] = useState(false);
    const navigate = useNavigate();

    // Simulate fingerprint scanning after 3 seconds
    useEffect(() => {
        setTimeout(() => {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
                navigate("/");
            }, 3000);
        }, 3000);
    }, [navigate]);

    return (
        <div className="scan-container">
            <div className="scan-box">
                <h2 className="scan-title">Put Your Finger on the Scanner</h2>
                <div className="scanner-animation"></div>

                {/* Show notification after scanning */}
                {showNotification && (
                    <div className="scan-notification">
                        Your attendance has been recorded.✅
                    </div>
                )}
            </div>
        </div>
    );
};

export default FingerprintScan;
