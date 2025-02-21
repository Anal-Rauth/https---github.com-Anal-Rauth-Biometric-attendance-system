const CheckAttendance = () => {
    return (
        <div className="home-container">
            <div className="check-attendance">
                <h2 className="title">Check Your Attendance</h2>
                <button
                    className="attendance-btn"
                    onClick={() => fetch("http://localhost:5000/check-attendance")}
                >
                    Check Attendance
                </button>
            </div>
        </div>
    );
};

export default CheckAttendance;
