import React from 'react'
import '../../App.css'

function AddReport() {
    return (
        //add reports page-28
        <div className="add-report">
            <svg className='back-btn' width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <div class="container">
                <div className='title'>Add Report</div>
                <div className="sub-title">
                    <label for="year">Year</label>
                </div>
                <select id="year">
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                </select>
                <div className="report-btn-container">
                    <button class="report-btn">Periodic Test - 1</button>
                    <button class="report-btn">Half-Yearly</button>
                    <button class="report-btn">Periodic Test - 3</button>
                    <button class="report-btn">Annual Exam</button>
                </div></div>

        </div>
    )
}

export default AddReport