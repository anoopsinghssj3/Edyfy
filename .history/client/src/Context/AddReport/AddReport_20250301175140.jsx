import React from 'react'
import '../../App.css'

function AddReport() {
    return (
        //add reports page-28
        <div className="add-report">

            <div class="container">
                <a href="#" class="back-arrow">&larr;</a>
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