import React from 'react'
import '../../App.css'

function StudentsProfile() {
    const items = ['apple', 'banana', 'cherry'];
    return (
        <div className="students-profile">
            <div class="container">
                <div className='title'>Student Profile</div>
                <div class="profile-header">
                    <div>class 12</div>
                    <div>Section A</div>
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

                        <ul>
                            <tr>
                            <td>abhay Raj</td>
                            <td><button class="view-button">View Attendance</button></td>
                            <td><button class="view-button">View Reports</button></td>
                        </tr>
                        </ul>
                        <tr>
                            <td>raj singh</td>
                            <td><button class="view-button">View Attendance</button></td>
                            <td><button class="view-button">View Reports</button></td>
                        </tr>
                    </tbody>


                </table>
            </div>


            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}

        </div>
    )
}

export default StudentsProfile