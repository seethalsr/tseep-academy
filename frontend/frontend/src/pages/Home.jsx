import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import tseepLogo from '../img/tseep-square-logo.png';
import Navbar from '../components/Navbar'
const Home = () => {
const [isChecked, setIsChecked] = useState(false);
const navigate = useNavigate();

const handleGetStarted = () => {
    if (isChecked) {
      navigate("/register");
    } else {
      alert("Please accept the terms and conditions before proceeding.");
    }
  };
  return (
    <div>
      {/* <div className="text-start mb-4">
        <img
          src={tseepLogo}
          alt="TSEEP Logo"
          className="logo"
        />
      </div> */}
      <Navbar/>
      <div className="container text-center px-4 welcome-wrapper">
      {/* Logo */}

      {/* Heading */}
      <h1 className="fw-bold">
        Welcome to <span className="highlight">TSEEP Mastery Box</span>
      </h1>
      <p className="text-muted fs-5 mt-2">
        Unlock your potential with <strong>AI inspired tool</strong>
      </p>

      {/* Checkbox & Button */}
      <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-md-8 text-start">
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="terms"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="terms">
              I confirm that I have read and accept the terms and conditions and privacy policy.
            </label>
          </div>
        </div>
        <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
          <button
            className="btn btn-custom px-4 py-2"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};
export default Home;
