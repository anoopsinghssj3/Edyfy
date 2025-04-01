import React from "react"
import "../App.css"

function AddReportofExam() {
    return (
        // Add Report of Exam (page-29,30,31)

        <div className="add-report-of-exam">
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" stroke:inejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>

            <div className="container">
                <div className="card">
                    <div className="sub-card">
                        <div className="title"> Add Reports</div>
                        <input type="text" className="sub-title" placeholder="Periodic Test - 1" />
                        <div className="student-name">
                            <label htmlFor="">Name:</label>
                            <input type="text" placeholder="Abhinav Pandey" />
                        </div>
                        <div className="cs">
                            <div className="class">
                                <label htmlFor="">Class:</label>
                                <input type="number" placeholder="10" />
                            </div>
                            <div className="section">
                                <label htmlFor="">Section:</label>
                                <input type="text" placeholder="F" />
                            </div>
                        </div>

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
                        <tr>
                            <td><input type="text" placeholder=" English" /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder=" Hindi" /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder=" Sanskrit" /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder=" Biology" /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder="Maths" /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder=" Accountancy" /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder=" Gen. Sci./EVS" /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder="Phy/Eco/So. Sci." /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder=" Chem" /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder=" Business Studies" /></td>
                            <td> <input type="number" placeholder="50"></input></td>
                            <td><input type="text" placeholder="35"></input></td>
                        </tr>

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

                <button >save</button>
            </div>

        </div>

    )
}

export default AddReportofExam
