import React from 'react'

function StudentsProfile() {
  return (
    <div className="students-profile">
         <div class="container">
        <h1>Student Profile</h1>
        <div class="profile-header">
            <div> <p>class 12</p></div>
            <div> <p>Section A</p></div>
        </div>
        <table class="student-list">
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>View Attendance</th>
                    <th>View Reports</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>abhay Raj</td>
                    <td><button class="view-button">View Attendance</button></td>
                    <td><button class="view-button">View Reports</button></td>
                </tr>
                <tr>
                    <td>raj singh</td>
                    <td><button class="view-button">View Attendance</button></td>
                    <td><button class="view-button">View Reports</button></td>
                </tr>
            </tbody>
        </table>
    </div>

    </div>
  )
}

export default StudentsProfile