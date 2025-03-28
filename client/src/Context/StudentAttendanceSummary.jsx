import React from 'react'
import '../App.css'

function StudentAttendanceSummary() {
    return (
        // view type page-9,10
        <div className="student-attendance-summary">
            <div className="container"> 
                <div className="card">
                    <div className='title'>Attendance Summary</div>
                    <div className="year-selector">
                        <span className="arrow">&lt;</span>
                        <span className="year">2025</span>
                        <span className="arrow">&gt;</span>
                        <button className="more-info-btn">
                            <img src="./src/Component/Images/more_info.svg" alt="" />
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
                    </div>
                    <button className="view-button">View Attendance</button>
                </div>
            </div>

        </div>
    )
}

export default StudentAttendanceSummary