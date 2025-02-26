import React from 'react'
import '../../App.css'

function AcademicReportsMarks() {
    // Academic report of Exam (page-12)

    return (
        <div className="academic-reports-marks">

            <div class="container">
                <div class="card">
                    <div className="sub-card">
                        <a href="#" class="back-arrow">&larr;</a>
                        <div className='title'> Academic Reports</div>
                        <div className='sub-title'>Periodic Test - 1</div>
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
                            <tr class="total-row">
                                <td><strong>Total</strong></td>
                                <td><strong>250</strong></td>
                                <td><strong>235</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="grade-row grade-row-percentage">
                        <div><strong>Percentage:</strong> </div> <div>98%</div>
                    </div>
                    <div class="grade-row grade-row--grade ">
                        <div><strong>Grade:</strong> </div> <div>A1</div>
                    </div>

                </div>

                <button onclick="window.print()">Print</button>
            </div>

        </div >
    )
}

export default AcademicReportsMarks