import React from 'react'

function AddReport() {
  return (
    <div className="add-report">
        
    <div class="container">
        <a href="#" class="back-arrow">&larr;</a>
        <h1>Add Report</h1>
        <label for="year">Year</label>
        <select id="year">
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
        </select>
        <button class="report-btn">Periodic Test - 1</button>
        <button class="report-btn">Half-Yearly</button>
        <button class="report-btn">Periodic Test - 3</button>
        <button class="report-btn">Annual Exam</button>
    </div>

    </div>
  )
}

export default AddReport