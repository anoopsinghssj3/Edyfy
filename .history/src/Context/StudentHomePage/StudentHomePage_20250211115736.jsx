import React from 'react'

function StudentHomePage() {
    return (
        <div className='student-home-page'>
            <div className="title" max>
                Welcome, Jayveer Chaugale
            </div>


            <div className="container">

                <button className="btns btns-1">
                    <span>My Profile</span>
                </button>

                <button className="btns btns-1">
                    <span> Attendance</span>
                </button>

                <button className="btns btns-1">
                    <span>My Reports</span>
                </button>

                <button className="btns btns-1">
                    <span>Chat with classmates</span>
                </button>

            </div>


        </div>
    )
}

export default StudentHomePage