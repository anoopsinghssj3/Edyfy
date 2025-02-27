import React from 'react'
import  '../../App.css'

function StudentAttendanceSummary() {
    return (
        // view type page-9,10
        <div className="student-attendance-summary">
            <div class="container">
                <div class="card">
                    <a href="#" class="back-arrow">&larr;</a>
                    <div className='title'>Attendance Summary</div>
                    <div class="year-selector">
                        <span class="arrow">&lt;</span>
                        <span class="year">2025</span>
                        <span class="arrow">&gt;</span>
                        <button className="more-info-btn">
                            <img src="./src/Component/Images/more_info.svg" alt="" />
                        </button>
                    </div>
                    <div class="attendance-list">
                        <div class="month"><span>Jan</span> <span>17 / 24</span></div>
                        <div class="month"><span>Feb</span> <span>17 / 24</span></div>
                        <div class="month"><span>March</span> <span>17 / 24</span></div>
                        <div class="month"><span>April</span> <span>17 / 24</span></div>
                        <div class="month"><span>May</span> <span>17 / 24</span></div>
                        <div class="month"><span>June</span> <span>17 / 24</span></div>
                        <div class="month"><span>July</span> <span>17 / 24</span></div>
                        <div class="month"><span>Aug</span> <span>17 / 24</span></div>
                        <div class="month"><span>Sept</span> <span>17 / 24</span></div>
                        <div class="month"><span>Oct</span> <span>17 / 24</span></div>
                        <div class="month"><span>Nov</span> <span>17 / 24</span></div>
                        <div class="month"><span>Dec</span> <span>17 / 24</span></div>
                    </div>
                    <button class="view-button">View Attendance</button>
                </div>
            </div>

        </div>
    )
}

export default StudentAttendanceSummary