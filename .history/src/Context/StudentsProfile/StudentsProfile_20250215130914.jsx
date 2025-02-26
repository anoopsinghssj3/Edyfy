import React from 'react'
import '../../App.css'

function StudentsProfile() {
    const MyComponent = () => {
        const items = ['apple', 'banana', 'cherry'];
    }
    
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
                    for(let students of student){
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

                    }
                </table>
            </div>

        </div>
    )
}

export default StudentsProfile