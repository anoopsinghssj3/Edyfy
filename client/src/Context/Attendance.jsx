// import React from "react"
// import "../App.css"
// function Attendance() {
//     return (
//         // Attendance btn type page-8
//         <div className="attendance">
//             <div className="container">
//                 <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>

//                 <div className="title">Attendence</div>

//                 <button className="more-info-btn">
//                     <img src="./src/Component/Images/more_info.svg" alt="" />
//                 </button>
//                 <label className="more-info-l" htmlFor="">More Info</label>
//                 <div className="upper-side">
//                     <div className="calendar">
//                         <label className="select-date" htmlFor="date">Select date</label>
//                         <input type="date" id="date" className="date-calender" />
//                         <div className="month-year">
//                             <span>Mon,August 2025</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="sub-container">
//                     <div className="days">
//                         <div className="day">S</div><div className="day">M</div><div className="day">T</div>
//                         <div className="day">W</div><div className="day">T</div><div className="day">F</div><div className="day">S</div>
//                     </div>
//                     <div className="dates">
//                         <span></span> <span></span> <span></span> <span></span> <span></span> <span>1</span> <span>2</span>
//                         <span className="holiday">3</span> <span>4</span> <span>5</span> <span>6</span> <span>7</span> <span className="yellow">8</span> <span className="yellow">9</span>
//                         <span className="holiday">10</span> <span>11</span> <span>12</span> <span>13</span> <span>14</span> <span className="absent">15</span> <span>16</span>
//                         <span className="holiday">17</span> <span>18</span> <span>19</span> <span>20</span> <span>21</span> <span>22</span> <span>23</span>
//                         <span className="holiday">24</span> <span>25</span> <span>26</span> <span>27</span> <span>28</span> <span>29</span> <span>30</span>
//                         <span className="holiday">31</span>

//                     </div></div>

//                 <button className="btn">View Attendence Summary</button>

//             </div>


//         </div>
//     )
// }

// export default Attendance


import React, { useState } from "react";
import "../App.css";
import VariousColorRoles from './VariousColorRoles'; // Import the VariousColorRoles component

function Attendance() {
    const [showInfo, setShowInfo] = useState(false); // State to toggle visibility of info

    // Toggle the state to show or hide the VariousColorRoles popup
    const toggleInfo = () => setShowInfo(prevState => !prevState);

    return (
        <div className="attendance">
            <div className="container">
                {/* Back Button */}
                <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="title">Attendance</div>

                {/* More Info Button */}
                <button className="more-info-btn" onClick={toggleInfo}>
                    More Info
                </button>
                
                {/* Conditionally Render VariousColorRoles Popup */}
                {showInfo && <VariousColorRoles closePopup={toggleInfo} />}
                
                {/* Calendar Section */}
                <div className="upper-side">
                    <div className="calendar">
                        <label htmlFor="date" className="select-date">Select date</label>
                        <input type="date" id="date" className="date-calender" />
                        <div className="month-year">
                            <span>Mon, August 2025</span>
                        </div>
                    </div>
                </div>

                {/* Calendar Days & Dates */}
                <div className="sub-container">
                    <div className="days">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => <div key={day} className="day">{day}</div>)}
                    </div>
                    <div className="dates">
                        {["", "", "", "", "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"].map((date, index) => (
                            <span key={index} className={date === "3" || date === "10" || date === "17" || date === "24" ? "holiday" : date === "15" ? "absent" : date === "8" || date === "9" ? "yellow" : ""}>{date}</span>
                        ))}
                    </div>
                </div>

                {/* Button to View Attendance Summary */}
                <button className="btn">View Attendance Summary</button>
            </div>
        </div>
    );
}

export default Attendance;
