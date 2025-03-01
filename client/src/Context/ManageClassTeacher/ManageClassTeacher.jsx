import React from 'react'
import "../../App.css"
function ManageClassTeacher() {
    return (
        // manage class teacher page-36
        <div className="manage-class-teacher">

            <div class="container">
                <button class="back-button">←</button>
                <div className='title'>Manage Class Teachers</div>
                <table>
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Teachers Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>A</td>
                            <td>
                                <select>
                                    <option>Jyoti Singh</option>
                                    <option>Garima</option>
                                    <option>Jagriti Singh</option>
                                    <option>None</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>B</td>
                            <td>
                                <select>
                                    <option>None</option>
                                    <option>Jyoti Singh</option>
                                    <option>Garima</option>
                                    <option>Jagriti Singh</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>A</td>
                            <td>
                                <select>
                                    <option>Garima</option>
                                    <option>Jyoti Singh</option>
                                    <option>Jagriti Singh</option>
                                    <option>None</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>A</td>
                            <td>
                                <select>
                                    <option>Jagriti Singh</option>
                                    <option>Jyoti Singh</option>
                                    <option>Garima</option>
                                    <option>None</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageClassTeacher