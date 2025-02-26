import React from 'react'
import '../../App.css'
function Attendance() {
    return (
        // Attendance btn type page-8
        <div className="attendance">

            <div class="container">
                <a href="#" class="back-arrow">&larr;</a>
                <div className='title'>Attendence</div>

                <button className="more-info-btn">
                    <img src="./src/Component/Images/more_info.svg" alt="" />
                </button>
                <label className='more-info-l' htmlFor="">More Info</label>
                <div className="upper-side">
                    <div class="calendar">
                        <label className='select-date' for="date">Select date</label>
                        <input type="date" id="date" className='date-calender' />
                        <div class="month-year">
                            <span>Mon,August 2025</span>
                        </div>
                    </div>
                </div>
                <div className="sub-container">
                    <div class="days">
                        <div class="day">S</div><div class="day">M</div><div class="day">T</div>
                        <div class="day">W</div><div class="day">T</div><div class="day">F</div><div class="day">S</div>
                    </div>
                    <div class="dates">
                        <span></span> <span></span> <span></span> <span></span> <span></span> <span>1</span> <span>2</span>
                        <span class="holiday">3</span> <span>4</span> <span>5</span> <span>6</span> <span>7</span> <span class="yellow">8</span> <span class="yellow">9</span>
                        <span class="holiday">10</span> <span>11</span> <span>12</span> <span>13</span> <span>14</span> <span class="absent">15</span> <span>16</span>
                        <span class="holiday">17</span> <span>18</span> <span>19</span> <span>20</span> <span>21</span> <span>22</span> <span>23</span>
                        <span class="holiday">24</span> <span>25</span> <span>26</span> <span>27</span> <span>28</span> <span>29</span> <span>30</span>
                        <span class="holiday">31</span>

                    </div></div>

                <button class="btn">View Attendence Summary</button>

            </div>


        </div>
    )
}

export default Attendance