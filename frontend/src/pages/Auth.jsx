import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <form>
                    {isSignup && (
                        <input type="text" placeholder="Full Name" className="auth-input" />
                    )}
                    <input type="email" placeholder="Email" className="auth-input" />
                    <input type="password" placeholder="Password" className="auth-input" />
                    <button type="submit" className="auth-btn">
                        {isSignup ? "Sign Up" : "Login"}
                    </button>
                </form>
                <p className="switch-text">
                    {isSignup ? "Already have an account?" : "Don't have an account?"}
                    <span onClick={() => setIsSignup(!isSignup)}>
                        {isSignup ? " Login" : " Sign Up"}
                    </span>
                </p>
                <button className="google-btn">Sign in with Google</button>
            </div>
        </div>
    );
};

export default Auth;
