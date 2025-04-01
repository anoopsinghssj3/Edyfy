import React, { useState, useEffect } from "react";
import "../App.css"; // Your custom styles

function TakeAttendance() {
    const getInitialAttendance = () => {
        const savedAttendance = JSON.parse(localStorage.getItem("attendance"));
        if (savedAttendance) {
            return savedAttendance;
        }

        return {
            1: { present: false, absent: false },
            2: { present: false, absent: false },
            3: { present: false, absent: false },
            4: { present: false, absent: false },
        };
    };

    const [attendance, setAttendance] = useState(getInitialAttendance);

    // Save attendance to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("attendance", JSON.stringify(attendance));
    }, [attendance]);

    // Toggle between Present and Absent for a given student
    const toggleAttendance = (id, type) => {
        setAttendance((prevAttendance) => {
            const newAttendance = { ...prevAttendance };
            newAttendance[id] = { present: false, absent: false }; // Reset both to false
            newAttendance[id][type] = !prevAttendance[id][type]; // Toggle the selected type
            return newAttendance;
        });
    };

    return (
        <div className="take-attendance">
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Home Button Icon */}
            <div className="home-btn">
                <i className="fa-solid fa-house"></i>
            </div>

            <div className="container">
                <div className="header">
                    <div className="title">Students Profile</div>
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
                        {Object.keys(attendance).map((id) => {
                            const studentName = id === "1" ? "Abhay Raj Tiwari" :
                                id === "2" ? "Harsh" :
                                    id === "3" ? "Garima Tiwari" :
                                        "Kanta Tiwari";
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{studentName}</td>
                                    <td>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={attendance[id].present}
                                                onChange={() => toggleAttendance(id, "present")}
                                            />
                                            <span className="slider present"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={attendance[id].absent}
                                                onChange={() => toggleAttendance(id, "absent")}
                                            />
                                            <span className="slider absent"></span>
                                        </label>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button className="send-updates">Send Updates</button>
            </div>

        </div>
    );
}

export default TakeAttendance;
