import React from 'react'
import "../../App.css"

function ClassTeacherHomePage() {
    // btn type page-21
    return (
        <div className="class-teacher-home-page">
            <div className='title-container'>
                <div className='title'>WELCOME GARIMA</div>
            </div>
            <div className="cs-container">
                <div class="cs">
                    <div >Class 12</div>
                    <div >Section A</div>
                </div>
            </div>


            <div className='btn-group'>
                <button >All Student</button>
                <button >Add Student Profile</button>
                <button > TAke / View Attendance</button>
            </div>

        </div>


    )
}

export default ClassTeacherHomePage