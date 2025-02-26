import React from 'react'
import "../../App.css"

function ClassTeacherHomePage() {
    // btn type page-21
    return (
        <div className="class-teacher-home-page">
            <div className='title-container'>
                <div className='title'>WELCOME GARIMA</div>
            </div>

            <div class="cs">
                <div style="float: left;" onclick="Class">Class 12</div>
                <div style="float: right;" onclick="Section">Section A</div>
            </div>


            <div className='btn-group'>
                <button onclick="viewStudentProfile()">View Student Profile</button>
                <button onclick="addStudentProfile()">Add Student Profile</button>
                <button onclick="viewAttendance()">View Attendance</button>
                <button onclick="viewReport()">View Report</button>
                <button onclick="addReport()">Add Report</button>
            </div>

        </div>


    )
}

export default ClassTeacherHomePage