import React from 'react'
import '../../App.css'

function AcademicReports() {
    // btn type nad view type
    return (
        <div className="academic-reports">
            <div class="container">
                <div class="card">
                    <svg class="back-arrow" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.79999 19.0197H20.16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

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