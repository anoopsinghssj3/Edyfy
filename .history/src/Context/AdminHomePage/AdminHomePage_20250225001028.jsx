import React from 'react'

function AdminHomePage() {
    return (
        <div className="admin-home-page">
            <div className='title'>
                <h1>WELCOME,ADMIN</h1>

    

            <nav>
                <button onclick="viewStudentProfile()">View Student Profile</button>
                <button onclick="manageclassteachers()">Manage Class Teachers</button>
                <button onclick="viewteacher()">View Teacher</button>
                <button onclick="addteacher()">Add Teacher</button>
                <button onclick="markholiday()">Mark Holiday</button>
                <button onclick="addclass()">Add Class</button>
                <button onclick="contactdevelopers()">Contact Developers</button>

            </nav>

            function viewStudentProfile() {
                alert("View Student Profile clicked");
        }



            function manageclassteachers() {
                alert("Manage Class Teachers clicked");
        }

            function viewteacher() {
                alert("View Teacher clicked");
        }

            function addteacher() {
                alert("Add Teacher clicked");
        }

            function markholiday() {
                alert("Mark Holiday clicked");
        }

            function addclass(){
                alert("Add Class clicked");
        }

            function contactdevelopers(){
                alert("Contact Developers clicked");
        }

        </div>
    )
}

export default AdminHomePage