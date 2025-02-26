import React from 'react'
import "../../App.css"

function ClassTeacherHomePage() {
    // btn type page-21
    return (
        <div className="class-teacher-home-page">
            <div className='title-container'>
                <div className='title'>WELCOME GARIMA</div>
            </div>
            <div class="button-container">
                <button style="float: left;" onclick="Class">Class 12</button>
                <button style="float: right;" onclick="Section">Section A</button>
            </div>


            <nav>
                <button onclick="viewStudentProfile()">View Student Profile</button>
                <button onclick="addStudentProfile()">Add Student Profile</button>
                <button onclick="viewAttendance()">View Attendance</button>
                <button onclick="viewReport()">View Report</button>
                <button onclick="addReport()">Add Report</button>
            </nav>

        </div>

        /* 
<script>
    function viewStudentProfile() {
        alert("View Student Profile clicked");
    }

    function addStudentProfile() {
        alert("Add Student Profile clicked");
    }

    function viewAttendance() {
        alert("View Attendance clicked");
    }

    function viewReport() {
        alert("View Report clicked");
    }

    function addReport() {
        alert("Add Report clicked");
    }
</script> */


    )
}

export default ClassTeacherHomePage