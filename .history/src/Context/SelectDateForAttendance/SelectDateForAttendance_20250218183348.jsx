import React from 'react'

function SelectDateForAttendance() {
    return (
        <div className="select-date-for-attendance">

            <div class="container">
                <h1>SELECT DATE</h1>
                <button class="back-button" onclick="history.back()">
                    <span class="arrow"></span>
                </button>
                <input type="date" class="date-picker">

                    <div class="calendar">
                        <div class="month">
                            <h2>April 2025</h2>
                        </div>
                        <div class="days">
                            <div class="day">Sun</div>
                            <div class="day">Mon</div>
                            <div class="day">Tue</div>
                            <div class="day">Wed</div>
                            <div class="day">Thu</div>
                            <div class="day">Fri</div>
                            <div class="day">Sat</div>
                        </div>
                        <div class="dates">
                            <div class="empty"></div> <!-- Adjust empty divs to align first date -->
                            <div class="empty"></div>
                            <div class="empty"></div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                            <div>11</div>
                            <div>12</div>
                            <div>13</div>
                            <div>14</div>
                            <div>15</div>
                            <div>16</div>
                            <div>17</div>
                            <div>18</div>
                            <div>19</div>
                            <div>20</div>
                            <div>21</div>
                            <div>22</div>
                            <div>23</div>
                            <div>24</div>
                            <div>25</div>
                            <div>26</div>
                            <div>27</div>
                            <div>28</div>
                            <div>29</div>
                            <div>30</div>
                        </div>
                    </div>
            </div>


        </div>
    )
}

export default SelectDateForAttendance