import React from 'react'
import '../../App.css'

function AddTeacher() {
    // add teacher page-39
    return (
        <div className="add-teacher">
            <div class="container">
                <h1>Add Teacher</h1>
                <svg className='back-btn' width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.79999 19.0197H20.16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <form action="">
                    <label for="name">Teacher's Name</label>
                    <input type="text" id="name" placeholder="teacher name: Garima Tiwari" />

                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="teacher username eg: garima123" />

                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Garima@123" />

                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddTeacher