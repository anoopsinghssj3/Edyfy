import React from 'react'
import "../../App.css"
function SelectClassForAttendance() {
    return (
        //select class for attendance page-33
        <div className="select-class-for-attendance">

            <div class="container">
                <button class="back-btn">&#8592;</button>
                <h1>Select Class</h1>
                <div class="dropdowns">
                    <div class="dropdown">
                        <label for="class">Class</label>
                        <select id="class">
                            <option value="12">12</option>
                            <option value="11">11</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div class="dropdown">
                        <label for="section">Section</label>
                        <select id="section">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                </div>
                <button class="view-btn">View</button>
            </div>

        </div>
    )
}

export default SelectClassForAttendance