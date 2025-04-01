import React, { useState } from "react";
import "../App.css"; // Ensure the color roles are included here

// Import the VariousColorRoles component
import VariousColorRoles from "./VariousColorRoles";

function Attendance() {
    const [showColorRoles, setShowColorRoles] = useState(false);

    // Function to toggle the visibility of the color roles
    const toggleColorRoles = () => {
        setShowColorRoles(!showColorRoles);
    };

    // Function to close the color roles popup
    const closeColorRoles = () => {
        setShowColorRoles(false);
    };

    return (
        <div className="attendance">
            <div className="container">
                <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="home-btn"><i className="fa-solid fa-house"></i></div>

                <div className="title">Attendance</div>

                <button className="more-info-btn" onClick={toggleColorRoles}>
                    More Info
                </button>

                {/* Conditionally render the VariousColorRoles component */}
                {showColorRoles && <VariousColorRoles closePopup={closeColorRoles} />}

                <div className="upper-side">
                    <div className="calendar">
                        <label className="select-date" htmlFor="date">Select date</label>
                        <input type="date" id="date" className="date-calender" />
                        <div className="month-year">
                            <span>Mon, August 2025</span>
                        </div>
                    </div>
                </div>

                <div className="sub-container">
                    <div className="days">
                        <div className="day">S</div><div className="day">M</div><div className="day">T</div>
                        <div className="day">W</div><div className="day">T</div><div className="day">F</div><div className="day">S</div>
                    </div>
                    <div className="dates">
                        <span></span> <span></span> <span></span> <span></span> <span></span> <span>1</span> <span>2</span>
                        <span className="holiday">3</span> <span>4</span> <span>5</span> <span>6</span> <span>7</span>
                        <span className="yellow">8</span> <span className="yellow">9</span>
                        <span className="holiday">10</span> <span>11</span> <span>12</span> <span>13</span> <span>14</span>
                        <span className="absent">15</span> <span>16</span>
                        <span className="holiday">17</span> <span>18</span> <span>19</span> <span>20</span> <span>21</span>
                        <span>22</span> <span>23</span>
                        <span className="holiday">24</span> <span>25</span> <span>26</span> <span>27</span> <span>28</span>
                        <span>29</span> <span>30</span>
                        <span className="holiday">31</span>
                    </div>
                </div>
                <button className="btn view-btn">View Attendance Summary</button>
            </div>
        </div>
    );
}

export default Attendance;
