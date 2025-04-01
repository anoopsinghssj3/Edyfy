import React, { useState } from "react";
import "../App.css";

function AddStudent() {
    const [formData, setFormData] = useState({
        name: "",
        classValue: "",
        section: "",
        admissionNumber: "",
        admissionMonth: "",
        admissionYear: "",
        parentMobile: "",
        studentMobile: "",
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
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.classValue) newErrors.classValue = "Class is required.";
        if (!formData.section) newErrors.section = "Section is required.";
        if (!formData.admissionNumber) newErrors.admissionNumber = "Admission number is required.";
        if (!formData.admissionMonth) newErrors.admissionMonth = "Admission month is required.";
        if (!formData.admissionYear) newErrors.admissionYear = "Admission year is required.";
        if (!formData.parentMobile) newErrors.parentMobile = "Parent mobile is required.";
        if (!formData.studentMobile) newErrors.studentMobile = "Student mobile is required.";
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
        <div className="add-student">
            <div className="container">
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

                <div className="sub-container">
                    <div className="title">Add Student</div>

                    <div className="profile-pic">
                        <img src="profile-placeholder.png" alt="Student Photo" />
                    </div>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            placeholder="Riya Mishra"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    {/* Class and Section */}
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="class" className="form-label">
                                Class
                            </label>
                            <select
                                id="classValue"
                                className={`form-select ${errors.classValue ? "is-invalid" : ""}`}
                                value={formData.classValue}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Class</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                            {errors.classValue && <div className="invalid-feedback">{errors.classValue}</div>}
                        </div>

                        <div className="col">
                            <label htmlFor="section" className="form-label">
                                Section
                            </label>
                            <select
                                id="section"
                                className={`form-select ${errors.section ? "is-invalid" : ""}`}
                                value={formData.section}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Section</option>
                                <option>A</option>
                                <option>B</option>
                            </select>
                            {errors.section && <div className="invalid-feedback">{errors.section}</div>}
                        </div>
                    </div>

                    {/* Admission Number */}
                    <div className="mb-3">
                        <label htmlFor="admission-number" className="form-label">
                            Admission Number
                        </label>
                        <input
                            type="text"
                            id="admissionNumber"
                            className={`form-control ${errors.admissionNumber ? "is-invalid" : ""}`}
                            placeholder="1350"
                            value={formData.admissionNumber}
                            onChange={handleInputChange}
                        />
                        {errors.admissionNumber && (
                            <div className="invalid-feedback">{errors.admissionNumber}</div>
                        )}
                    </div>

                    {/* Admission Month and Year */}
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="admission-month" className="form-label">
                                Admission Month
                            </label>
                            <select
                                id="admissionMonth"
                                className={`form-select ${errors.admissionMonth ? "is-invalid" : ""}`}
                                value={formData.admissionMonth}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Month</option>
                                <option>July</option>
                                <option>August</option>
                            </select>
                            {errors.admissionMonth && (
                                <div className="invalid-feedback">{errors.admissionMonth}</div>
                            )}
                        </div>

                        <div className="col">
                            <label htmlFor="admission-year" className="form-label">
                                Admission Year
                            </label>
                            <input
                                type="text"
                                id="admissionYear"
                                className={`form-control ${errors.admissionYear ? "is-invalid" : ""}`}
                                placeholder="2022"
                                value={formData.admissionYear}
                                onChange={handleInputChange}
                            />
                            {errors.admissionYear && (
                                <div className="invalid-feedback">{errors.admissionYear}</div>
                            )}
                        </div>
                    </div>

                    {/* Parent Mobile */}
                    <div className="mb-3">
                        <label htmlFor="parent-mobile" className="form-label">
                            Mobile (Parent)
                        </label>
                        <input
                            type="text"
                            id="parentMobile"
                            className={`form-control ${errors.parentMobile ? "is-invalid" : ""}`}
                            placeholder="7846284749"
                            value={formData.parentMobile}
                            onChange={handleInputChange}
                        />
                        {errors.parentMobile && (
                            <div className="invalid-feedback">{errors.parentMobile}</div>
                        )}
                    </div>

                    {/* Student Mobile */}
                    <div className="mb-3">
                        <label htmlFor="student-mobile" className="form-label">
                            Mobile (Student)
                        </label>
                        <input
                            type="text"
                            id="studentMobile"
                            className={`form-control ${errors.studentMobile ? "is-invalid" : ""}`}
                            placeholder="7487347924"
                            value={formData.studentMobile}
                            onChange={handleInputChange}
                        />
                        {errors.studentMobile && (
                            <div className="invalid-feedback">{errors.studentMobile}</div>
                        )}
                    </div>

                    {/* Checkbox for Same as Parent */}
                    <div className="checkbox">
                        <input type="checkbox" id="same-as-parent" className="same-as-parent-i" />
                        <label htmlFor="same-as-parent" className="same-as-parent-l">
                            Same as parent
                        </label>  </div>

                    {/* Username and Password */}
                    <div className="sub-container-2">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                                placeholder="riya123"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                placeholder="riya@@1220"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddStudent;
