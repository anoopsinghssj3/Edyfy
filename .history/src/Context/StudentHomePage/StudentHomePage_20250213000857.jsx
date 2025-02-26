import React from 'react'
import  '../../App.css'

function StudentHomePage() {
    return (
        // student homepage btn type page-6
        <div className='student-home-page'>
            <div className="title" max>
                Welcome, Jayveer Chaugale
            </div>

            <div className="container">

                <button className="btns btns-1">
                    <span>View Profile</span>
                </button>

                <button className="btns btns-1">
                    <span> View Attendance</span>
                </button>

                <button className="btns btns-1">
                    <span>View Reports</span>

                </button>

                <button className="btns btns-1">
                    <span>Chat with Classmates</span>
                </button>

            </div>


        </div>
    )
}

export default StudentHomePage