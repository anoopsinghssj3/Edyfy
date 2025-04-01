import React from "react"
import "../App.css"
function SelectClassForAttendance() {
    return (
        //select class for attendance page-33
        <div className="select-class-for-attendance">
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>

            <div className="container">
                <div className="title">Select Class</div>
                <div className="dropdowns">
                    <div className="dropdown">
                        <label htmlFor="class">Class</label>
                        <select id="class">
                            <option value="12">12</option>
                            <option value="11">11</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <label htmlFor="section">Section</label>
                        <select id="section">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                </div>
                <button className="view-btn">View</button>
            </div>

        </div>
    )
}

export default SelectClassForAttendance