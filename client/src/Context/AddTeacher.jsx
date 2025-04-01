import React, { useState } from "react";
import "../App.css";

function AddTeacher() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        let newErrors = {};

        // Basic validation checks
        if (!formData.name) newErrors.name = "Teacher's name is required.";
        if (!formData.username) newErrors.username = "Username is required.";
        if (!formData.password) newErrors.password = "Password is required.";

        // If there are any errors, prevent form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            // Handle form submission (e.g., sending the data to a server)
            console.log("Form data submitted:", formData);
        }
    };

    return (
        <div className="add-teacher">
            <svg
                className="back-btn"
                width="24"
                height="39"
                viewBox="0 0 24 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4.79999 19.0197H20.16"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>
            <div className="container">
                <div className="title">Add Teacher</div>

                <form onSubmit={handleSubmit} noValidate>
                    {/* Teacher"s Name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Teacher"s Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            placeholder="Enter teacher name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    {/* Username */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className={`form-control ${errors.username ? "is-invalid" : ""}`}
                            placeholder="Enter teacher username, e.g., garima123"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddTeacher;
