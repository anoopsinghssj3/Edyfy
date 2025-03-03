import React from 'react'
import '../../App.css'

function AddReportofExam() {
    return (
        // Add Report of Exam (page-29,30,31)

        <div className="add-report-of-exam">

            <div class="container">
                <div class="card">
                    <div className="sub-card">
                        <a href="#" class="back-arrow">&larr;</a>
                        <div className='title'> Add Exam Reports</div>
                        <input type="text" className='sub-title' placeholder='Periodic Test - 1' />
                        <div > </div>
                        <strong>Name:</strong> <input type="text" placeholder='Abhinav Pandey' />
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
                            <tr>
                                <td><input type="text" placeholder=' English' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder=' Hindi' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder=' Sanskrit' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder=' Biology' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder='Maths' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder=' Accountancy' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder=' Gen. Sci./EVS' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder='Phy/Eco/So. Sci.' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder=' Chem' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder=' Business Studies' /></td>
                                <td> <input type="number" placeholder='50'></input></td>
                                <td><input type="text" placeholder='35'></input></td>
                            </tr>

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

                <button >save</button>
            </div>

        </div>
    )
}

export default AddReportofExam