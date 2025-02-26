import React from 'react'
import '../../App.css'

function AcademicReportsMarks() {
    return (
        <div className="academic-reports-marks">


            <div class="container">
                <div class="card">
                    <a href="#" class="back-arrow">&larr;</a>
                    <div className='title'> Academic Reports</div>
                    <>Periodic Test - 1</h2>
                    <div classname='sub-title'><strong>Name:</strong> Abhinav Pandey</div>
                <p><strong>Class:</strong> 12 &nbsp; <strong>Section:</strong> A</p>

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
                        <tr class="grade-row">
                            <td colspan="3"><strong>Grade:</strong> A1</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <button onclick="window.print()">Print</button>
        </div>

        </div >
    )
}

export default AcademicReportsMarks