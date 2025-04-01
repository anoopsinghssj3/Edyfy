import React from "react"
import "../App.css"
function ManageClassTeacher() {
    return (
        // manage class teacher page-36
        <div className="manage-class-teacher">
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>

            <div className="container">
                <div className="title">Manage Class Teachers</div>
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