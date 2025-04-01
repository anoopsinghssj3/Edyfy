import React, { useState } from "react";
import "../App.css";  // Keeping your existing styles intact

function AcademicReports() {
    const [selectedYear, setSelectedYear] = useState(""); // State to store selected year
    const [error, setError] = useState(""); // State for validation error message

    // Handle year selection change
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        setError(""); // Reset error when a new year is selected
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedYear) {
            setError("Please select a year.");
        } else {
            console.log("Form submitted with year:", selectedYear);
        }
    };

    return (
        <div className="academic-reports">
            {/* Back Button Icon */}
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>

            <div className="container">
                <div className="card">
                    {/* Card Title */}
                    <div className="title">Academic Reports</div>

                    {/* Student Information */}
                    <p className="name">
                        Name: <strong>Abhinav Pandey</strong>
                    </p>

                    {/* Year Selection */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="year">Year</label>
                            <select
                                className={`form-control ${error ? "is-invalid" : ""}`}
                                id="year"
                                value={selectedYear}
                                onChange={handleYearChange}
                            >
                                <option value="">Select Year</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select>
                            {error && <div className="invalid-feedback">{error}</div>}
                        </div>

                        {/* Save Button */}
                        <button className="btn save-btn" type="submit">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AcademicReports;
