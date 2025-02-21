const RegisterBiometric = () => {
    return (
        <div className="home-container">
            <div className="register-container">
                <h2 className="register-title">Register Your Biometrics</h2>
                <button
                    className="register-btn"
                    onClick={() => fetch("http://localhost:5000/register-biometric", { method: "POST" })}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegisterBiometric;
