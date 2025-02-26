import React from 'react'
import "../../App.css"
import "./TakeAttendance.js"

function TakeAttendance() {
    return (
        <div className="take-attendance">
            <div class="container">
                <div className='header'>
                    <span class="back-arrow">&#8592;</span>
                    <div className='title'>Students Profile</div>
                </div>
                <div class="class-info">
                    <p><strong>Class</strong> 12</p>
                    <p><strong>Section</strong> A</p>
                    <p><strong>Date :</strong> 13/12/24</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>Present</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Abhay Raj Tiwari</td>
                            <td><button class="toggle-btn"></button></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Harsh</td>
                            <td><button class="toggle-btn"></button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Garima Tiwari</td>
                            <td><button class="toggle-btn"></button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Kanta Tiwari</td>
                            <td><button class="toggle-btn"></button></td>
                        </tr>
                    </tbody>
                </table>
                <button class="send-updates">Send Updates</button>
            </div>

        </div>
    )
}

export default TakeAttendance