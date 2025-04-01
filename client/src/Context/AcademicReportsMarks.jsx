import React from "react"
import  "../App.css"

function AcademicReportsMarks() {
    // Academic report of Exam (page-12,13,14)

    return (
        <div className="academic-reports-marks">
            <svg className="back-btn" type="button" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>

            <div className="container">
                <div className="card">
                    <div className="sub-card">
                        <div className="title"> Academic Reports</div>
                        <div className="sub-title">Periodic Test - 1</div>
                        <div ><strong>Name:</strong> Abhinav Pandey</div>
                        <div className="cs">
                            <div><strong>Class:</strong> 12 &nbsp;</div><div> <strong>Section:</strong> A</div>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Subject Name</th>
                                <th>Max. Marks</th>
                                <th>Marks Obtained</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>English</td><td>50</td><td>35</td></tr>
                            <tr><td>Hindi</td><td>50</td><td>35</td></tr>
                            <tr><td>Sanskrit</td><td>50</td><td>35</td></tr>
                            <tr><td>Biology</td><td>50</td><td>35</td></tr>
                            <tr><td>Maths</td><td>50</td><td>35</td></tr>
                            <tr><td>Accountancy</td><td>50</td><td>35</td></tr>
                            <tr><td>Gen. Sci./EVS</td><td>50</td><td>35</td></tr>
                            <tr><td>Phy/Eco/So. Sci.</td><td>50</td><td>35</td></tr>
                            <tr><td>Chem</td><td>50</td><td>35</td></tr>
                            <tr><td>Business Studies</td><td>50</td><td>35</td></tr>
                        </tbody>
                        <tfoot>
                            <tr className="total-row">
                                <td><strong>Total</strong></td>
                                <td><strong>250</strong></td>
                                <td><strong>235</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="grade-row grade-row-percentage">
                        <div><strong>Percentage:</strong> </div> <div>98%</div>
                    </div>
                    <div className="grade-row grade-row--grade ">
                        <div><strong>Grade:</strong> </div> <div>A1</div>
                    </div>

                </div>

                <button onClick={window.print()}>Print</button>
            </div>

        </div >
    )
}

export default AcademicReportsMarks