import React from "react"
import "../App.css"

function StudentHomePage() {
    return (
        // student homepage btn type page-6
        <div className="student-home-page">
            {/* Back Button Icon */}
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Home Button Icon */}
            <div className="home-btn">
                <i className="fa-solid fa-house"></i>
            </div>

            <div className="title" max={25}>
                Welcome, Jayveer Chaugale
            </div>

            <div className="container">

                <button className="btns btns-1">
                    <span>View Profile</span>
                </button>

                <button className="btns btns-2">
                    <span> View Attendance</span>
                </button>

                <button className="btns btns-3">
                    <span>View Reports</span>
                </button>

                <button className="btns btns-4">
                    <span>Chat with Classmates</span>
                </button>

            </div>

        </div>
    )
}

export default StudentHomePage