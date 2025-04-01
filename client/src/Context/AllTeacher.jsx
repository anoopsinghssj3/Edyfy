import React from "react"
import "../App.css"
function AllTeacher() {
    return (
        // all teacher page - 37
        <div className="all-teacher">
              <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="home-btn"><i className="fa-solid fa-house"></i></div>
 
            <div className="container">
                <div className="title">All Teachers</div>

                <div className="sub-title">Teacher Name</div>
                <ul className="teacher-list">
                    <li><span className="circle">1</span> Jyoti Singh</li>
                    <li><span className="circle">1</span> Shivani Singh</li>
                    <li><span className="circle">9</span> Garima Singh</li>
                    <li><span className="circle">10</span> Jagriti Singh</li>
                    <li><span className="circle">100</span> Rekha Srinivasan</li>
                </ul>
            </div>
        </div >
    )
}

export default AllTeacher