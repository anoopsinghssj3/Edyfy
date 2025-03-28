import React from 'react'
import "../App.css"

function TakeAttendance() {

    return (
        //take attendance page-25,26
        <div className="take-attendance">
            <svg className='back-btn' width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="container">
                <div className='header'>
                    <div className='title'>Students Profile</div>
                </div>
                <div className="class-info">
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
                            <th>Absent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Abhay Raj Tiwari</td>
                            <td><button className="toggle-btn"></button></td>
                            <td><button className="toggle-btn"></button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Harsh</td>
                            <td><button className="toggle-btn"></button></td>
                            <td><button className="toggle-btn"></button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Garima Tiwari</td>
                            <td><button className="toggle-btn"></button></td>
                            <td><button className="toggle-btn"></button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Kanta Tiwari</td>
                            <td><button className="toggle-btn"></button></td>
                            <td><button className="toggle-btn"></button></td>
                        </tr>
                    </tbody>
                </table>
                <button className="send-updates">Send Updates</button>
            </div>

        </div>
    )
}

export default TakeAttendance