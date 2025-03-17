import React from 'react'
import '../../App.css'
function SelectStudentAddReport() {
    return (
        // select student to add report page-27
        <div className="select-student-add-report">

            <div class="container">
                <svg className='back-btn' width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.79999 19.0197H20.16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className='title'>Add Report</div>
                <div class="class-info">
                    <span>Class 12</span>
                    <span>Section A</span>
                </div>

                <div class="sub-title">Student Name</div>
                <ul class="student-list">
                    <li><span class="circle">9</span> Abhay Raj Tiwari</li>
                    <li><span class="circle">9</span> Abhay Raj Tiwari</li>
                    <li><span class="circle">10</span> Abhay Raj Tiwari</li>
                    <li><span class="circle">900</span> Abhay Raj Tiwari</li>
                </ul>
            </div>

        </div>
    )
}

export default SelectStudentAddReport