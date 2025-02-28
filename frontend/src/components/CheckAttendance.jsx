const CheckAttendance = () => {
    const handleCheckAttendance = () => {
        // Assuming the backend generates and provides an Excel file
        window.location.href = "http://localhost:5000/check-attendance";
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
