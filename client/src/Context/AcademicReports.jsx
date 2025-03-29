import React from "react"
import  "../App.css"

let backBtn = addEventListener("click",()=>{
    console.log("button clicked");
})
function AcademicReports() {
    // btn type nad view type page-11
    return (

        <div className="academic-reports">
            <svg className="back-btn" type="button" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="container">


                <div className="card">
                    <div className="title">Academic Reports</div>
                    <p className="name">Name: <strong>Abhinav Pandey</strong></p>
                    <label htmlFor="year">Year</label>
                    <select id="year">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                    <div className="test-list">
                        <button className="test-btn">Periodic Test - 1</button>
                        <button className="test-btn">Periodic Test - 2</button>
                        <button className="test-btn">Periodic Test - 3</button>
                        <button className="test-btn">Annual Exam</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AcademicReports