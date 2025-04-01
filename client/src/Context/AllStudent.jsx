import React, { useState } from "react"
import "../App.css"

function AllStudent() {
    // State to manage the visibility of the alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertContent, setAlertContent] = useState("");

    let alertNotify = () => {
        console.log("clicked");
        // Set content for the alert
        setAlertContent(
            // notify added here
            <div className="alertNotify">
                <button className="close" onClick={closeAlert}>
                    <i class="fa-solid fa-circle-xmark"></i></button>
                <button>View Profile</button>
                <button>Edit Profile</button>
                <button>View Attendance</button>
                <button>View Reports</button>
                <button>Add Reports</button>
            </div>
        );
        // Show the alert by setting showAlert to true
        setShowAlert(true);
    }

    // Function to close the alert
    const closeAlert = () => {
        setShowAlert(false);
    }

    return (
        <div className="all-student">
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="home-btn"><i className="fa-solid fa-house"></i></div>


            <div className="container">
                <div className="title">All Student</div>
                <div className="profile-header">
                    <div>Class 12</div>
                    <div>Section A</div>
                </div>
                <table className="student-list">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button onClick={alertNotify}>Abhay Raj</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={alertNotify}>Abhay Raj</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Conditionally render the alert */}
            {showAlert && (
                <div className="alert">
                    <div className="alert-content">
                        {alertContent}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AllStudent;
