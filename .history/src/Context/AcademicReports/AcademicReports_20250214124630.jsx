import React from 'react'
import '../../App.css'
function AcademicReports() {
    // btn type nad view type
    return (
        <div className="academic-reports">
            <div class="container">
        <div class="card">
            <a href="#" class="back-arrow">&larr;</a>
            <div className='title'>Academic Reports</div>
            <p class="name">Name: <strong>Abhinav Pandey</strong></p>
            <label for="year">Year</label>
            <select id="year">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
            <div class="test-list">
                <button class="test-btn">Periodic Test - 1</button>
                <button class="test-btn">Periodic Test - 2</button>
                <button class="test-btn">Periodic Test - 3</button>
                <button class="test-btn">Annual Exam</button>
            </div>
        </div>
    </div>

        </div>
    )
}

export default AcademicReports