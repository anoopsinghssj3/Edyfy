import React from 'react'

function AddClass() {
    return (
        // add class page-40
        <div className="add-class">
            <div class="container">
                <div class="title">Add Class</div>
                <form action="" id="attendanceForm">
                    <input type="text" id="className" placeholder="Enter Class Name" required />
                    <input type="text" id="sectionName" placeholder="Enter Section Name" required />
                    <input type="submit" value="View" />
                </form>
                <div class="attendance-list" id="attendanceList"></div>
            </div>
        </div>
    )
}

export default AddClass