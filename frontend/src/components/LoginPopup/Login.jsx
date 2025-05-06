import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
                </div>

                <div className="login-popup-inputs">
                    <input name="name" type="text" placeholder="Your name" required />
                    <input name="email" type="email" placeholder="Your email" required />
                    <input name="password" type="password" placeholder="Your password" required />
                </div>

                <button type="submit">
                    {currentState === "Sign Up" ? "Create Account" : "Login"}
                </button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>

                {currentState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrentState("Login")}>Login here</span>
                    </p>
                )}
            </form>
        </div>

    );
};

export default LoginPopup;