import React from 'react'

function StudentProfile() {
    return (
        <div className="student-profile">
            <h2>Add Student</h2>
        <div class="profile-pic">
            <img src="profile-placeholder.png" alt="Student Photo"/>
        </div>
        
        <form action="">
        <label for="name">Name</label>
            <input type="text" id="name" placeholder="Riya Mishra"/>

        </form>
        
        </div>
    )
}

export default StudentProfile