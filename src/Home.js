import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./Assests/logo.PNG"; // Ensure the path matches your existing folder structure

export default function Home() {
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (region === "West") {
      navigate("/west-registration");
    } else if (region === "East") {
      navigate("/east-registration");
    } else {
      alert("Please select a region to continue.");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card p-5 shadow-lg text-center" style={{ maxWidth: "500px", width: "100%" }}>
        
        {/* LOGO */}
        <img
          src={logo}
          alt="SPICON Logo"
          className="mb-4 mx-auto"
          style={{ width: "150px" }}
        />

        <h2 className="fw-bold mb-4">REGISTRATION FOR SPICON 2026</h2>

        <div className="mb-4 text-start">
          <label className="form-label fw-bold">Select Your Region</label>
          <select
            className="form-select form-select-lg"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">-- Choose Region --</option>
            <option value="West">West Rayalaseema</option>
            <option value="East">East Rayalaseema</option>
          </select>
        </div>

        <button 
          className="btn btn-primary btn-lg w-100" 
          onClick={handleContinue}
          disabled={!region}
        >
          Continue
        </button>
      </div>
    </div>
  );
}