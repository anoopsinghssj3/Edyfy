import React from "react"
import "../App.css"

function ClassTeacherHomePage() {
    // btn type page-21
    return (
        <div className="class-teacher-home-page">
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>

            <div className="title-container">
                <div className="title">WELCOME GARIMA</div>
            </div>
            <div className="cs-container">
                <div className="cs">
                    <div >Class 12</div>
                    <div >Section A</div>
                </div>
            </div>


            <div className="btn-group">
                <button >All Student</button>
                <button >Add Student Profile</button>
                <button > TAke / View Attendance</button>
            </div>

        </div>


    )
}

export default ClassTeacherHomePage