import React from "react"
import "../App.css"

function StudentAttendanceSummary() {
    return (
        // view type page-9,10
        <div className="student-attendance-summary">
            {/* Back Button Icon */}
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Home Button Icon */}
            <div className="home-btn">
                <i className="fa-solid fa-house"></i>
            </div>

            <div className="container">
                <div className="card">
                    <div className="title">Attendance Summary</div>
                    <div className="year-selector">
                        <span className="arrow">&lt;</span>
                        <span className="year">2025</span>
                        <span className="arrow">&gt;</span>
                        <button className="more-info-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="12" fill="#DFE3E7" />
                                <path d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM10.125 15.75H11.25V12.75H10.125C9.50156 12.75 9 12.2484 9 11.625C9 11.0016 9.50156 10.5 10.125 10.5H12.375C12.9984 10.5 13.5 11.0016 13.5 11.625V15.75H13.875C14.4984 15.75 15 16.2516 15 16.875C15 17.4984 14.4984 18 13.875 18H10.125C9.50156 18 9 17.4984 9 16.875C9 16.2516 9.50156 15.75 10.125 15.75ZM12 6C12.3978 6 12.7794 6.15804 13.0607 6.43934C13.342 6.72064 13.5 7.10218 13.5 7.5C13.5 7.89782 13.342 8.27936 13.0607 8.56066C12.7794 8.84196 12.3978 9 12 9C11.6022 9 11.2206 8.84196 10.9393 8.56066C10.658 8.27936 10.5 7.89782 10.5 7.5C10.5 7.10218 10.658 6.72064 10.9393 6.43934C11.2206 6.15804 11.6022 6 12 6Z" fill="#0F1417" />
                            </svg>
                        </button>
                    </div>
                    <div className="attendance-list">
                        <div className="month"><span>Jan</span> <span>17 / 24</span></div>
                        <div className="month"><span>Feb</span> <span>17 / 24</span></div>
                        <div className="month"><span>March</span> <span>17 / 24</span></div>
                        <div className="month"><span>April</span> <span>17 / 24</span></div>
                        <div className="month"><span>May</span> <span>17 / 24</span></div>
                        <div className="month"><span>June</span> <span>17 / 24</span></div>
                        <div className="month"><span>July</span> <span>17 / 24</span></div>
                        <div className="month"><span>Aug</span> <span>17 / 24</span></div>
                        <div className="month"><span>Sept</span> <span>17 / 24</span></div>
                        <div className="month"><span>Oct</span> <span>17 / 24</span></div>
                        <div className="month"><span>Nov</span> <span>17 / 24</span></div>
                        <div className="month"><span>Dec</span> <span>17 / 24</span></div>

                        <button className="view-button">View Attendance</button> </div>
                </div>
            </div>

        </div>
    )
}

export default StudentAttendanceSummary