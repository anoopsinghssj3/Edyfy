import React from 'react'

function ClassTeacherHomePage() {
    return (
        <div className="class-teacher-home-page">
                <header>
        <h1>WELCOME</h1>
        <h2>GARIMA</h2> 
        
    </header>
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
    </script>

        </div>
    )
}

export default ClassTeacherHomePage