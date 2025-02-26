import React from 'react'

function StudentProfile() {
    return (
        <div className="student-profile">
            <h2>Add Student</h2>
            <div class="profile-pic">
                <img src="profile-placeholder.png" alt="Student Photo" />
            </div>

            <form action="">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Riya Mishra" />

                <div className="row">
                    <div>
                        <label for="class">Class</label>
                        <select id="class">
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>
                    <div>
                        <label for="section">Section</label>
                        <select id="section">
                            <option>A</option>
                            <option>B</option>
                        </select>
                    </div>

                </div>

                
            <label for="admission-number">Admission Number</label>
            <input type="text" id="admission-number" placeholder="1350">

            <div class="row">
                <div>
                    <label for="admission-month">Admission Month</label>
                    <select id="admission-month">
                        <option>July</option>
                        <option>August</option>
                    </select>
                </div>
                <div>
                    <label for="admission-year">Admission Year</label>
                    <input type="text" id="admission-year" placeholder="2022">
                </div>
            </div>

            </form>

        </div>
    )
}

export default StudentProfile