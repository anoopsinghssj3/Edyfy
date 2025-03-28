import React from "react"
import "../App.css"

function SelectDateForAttendance() {
    return (
        // select date for attendance page-33
        <div className="select-date-for-attendance">
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="container">

                <div className="title">Attendence</div>

                <button className="more-info-btn">
                    <img src="./src/Component/Images/more_info.svg" alt="" />
                </button>
                <label className="more-info-l" htmlFor="">More Info</label>
                <div className="upper-side">
                    <div className="calendar">
                        <label className="select-date" htmlFor="date">Select date</label>
                        <input type="date" id="date" className="date-calender" />
                        <div className="month-year">
                            <span>Mon,August 2025</span>
                        </div>
                    </div>
                </div>
                <div className="sub-container">
                    <div className="days">
                        <div className="day">S</div><div className="day">M</div><div className="day">T</div>
                        <div className="day">W</div><div className="day">T</div><div className="day">F</div><div className="day">S</div>
                    </div>
                    <div className="dates">
                        <button></button> <button></button>  <button></button>  <button></button>  <button></button>  <button>1</button>  <button>2</button>
                        <button className="holiday">3</button> <button>4</button> <button>5</button> <button>6</button> <button>7</button> <button className="yellow">8</button> <button className="yellow">9</button>
                        <button className="holiday">10</button> <button>11</button> <button>12</button> <button>13</button> <button>14</button> <button className="absent">15</button> <button>16</button>
                        <button className="holiday">17</button> <button>18</button> <button>19</button> <button>20</button> <button>21</button> <button>22</button> <button>23</button>
                        <button className="holiday">24</button> <button>25</button> <button>26</button> <button>27</button> <button>28</button> <button>29</button> <button>30</button>
                        <button className="holiday">31</button> <button></button> <button></button>  <button></button>  <button></button>  <button></button> <button></button>

                    </div></div>

                <button className="btn">Ok</button>

            </div>

        </div>



    )
}

export default SelectDateForAttendance