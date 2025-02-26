import React from 'react'
import "../../App.css"

function ClassTeacherHomePage() {
    // btn type page-21
    return (
        <div className="class-teacher-home-page">
            <div className='title-container'>
                <div className='title'>WELCOME GARIMA</div>
            </div>

            
            <div class="cs">
                <div >Class 12</div>
                <div >Section A</div>
            </div>


            <div className='btn-group'>
                <button >View Student Profile</button>
                <button >Add Student Profile</button>
                <button >View Attendance</button>
                <button >View Report</button>
                <button >Add Report</button>
            </div>

        </div>


    )
}

export default ClassTeacherHomePage