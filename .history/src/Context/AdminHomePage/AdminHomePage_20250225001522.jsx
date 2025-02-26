import React from 'react'
import '../../App.css'

function AdminHomePage() {
    return (
        <div className="admin-home-page">
            <div className='title'>
                <h1>WELCOME, ADMIN</h1>

                <div className='button-container'>
                    <button onclick="viewStudentProfile()">View Student Profile</button>
                    <button onclick="manageclassteachers()">Manage Class Teachers</button>
                    <button onclick="viewteacher()">View Teacher</button>
                    <button onclick="addteacher()">Add Teacher</button>
                    <button onclick="markholiday()">Mark Holiday</button>
                    <button onclick="addclass()">Add Class</button>
                    <button onclick="contactdevelopers()">Contact Developers</button>

                </nav>

            </div>
        </div>
    )
}

export default AdminHomePage