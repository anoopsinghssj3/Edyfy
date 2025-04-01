import React, { useState } from "react";
import "../App.css";

function AddClass() {
    // State to store the selected values and error messages
    const [classValue, setClassValue] = useState("");
    const [sectionValue, setSectionValue] = useState("");
    const [errors, setErrors] = useState({ class: "", section: "" });

    // Handle class value change
    const handleClassChange = (e) => {
        setClassValue(e.target.value);
        setErrors((prev) => ({ ...prev, class: "" })); // Reset class error when a selection is made
    };

    // Handle section value change
    const handleSectionChange = (e) => {
        setSectionValue(e.target.value);
        setErrors((prev) => ({ ...prev, section: "" })); // Reset section error when a selection is made
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        let valid = true;
        let newErrors = { class: "", section: "" };

        if (!classValue) {
            newErrors.class = "Please select a class.";
            valid = false;
        }

        if (!sectionValue) {
            newErrors.section = "Please select a section.";
            valid = false;
        }

        setErrors(newErrors);

        // If valid, you can proceed with form submission logic
        if (valid) {
            console.log("Form submitted with values:", { classValue, sectionValue });
        }
    };

    return (
        <div className="add-class">
            {/* Back Button Icon */}
            <svg className="back-btn" type="button" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>

            <div className="container">
                <div className="title">Add Class</div>
                <form onSubmit={handleSubmit}>
                    <div className="dropdowns">
                        {/* Class Dropdown */}
                        <div className={`dropdown ${errors.class ? "has-error" : ""}`}>
                            <label htmlFor="class">Class</label>
                            <select
                                id="class"
                                value={classValue}
                                onChange={handleClassChange}
                                className={`select-dropdown ${errors.class ? "is-invalid" : ""}`}
                            >
                                <option value="">Select Class</option>
                                <option value="12">12</option>
                                <option value="11">11</option>
                                <option value="10">10</option>
                            </select>
                            {errors.class && <div className="invalid-feedback">{errors.class}</div>}
                        </div>

                        {/* Section Dropdown */}
                        <div className={`dropdown ${errors.section ? "has-error" : ""}`}>
                            <label htmlFor="section">Section</label>
                            <select
                                id="section"
                                value={sectionValue}
                                onChange={handleSectionChange}
                                className={`select-dropdown ${errors.section ? "is-invalid" : ""}`}
                            >
                                <option value="">Select Section</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                            {errors.section && <div className="invalid-feedback">{errors.section}</div>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="view-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddClass;
