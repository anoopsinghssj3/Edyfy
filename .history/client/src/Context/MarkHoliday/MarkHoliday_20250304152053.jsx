import React from 'react'
import '../../App.css'


function MarkHoliday() {
  return (
    // mark holiday page-38

    <div className="mark-holiday">
      <div class="container">
        <div className='title'>Mark Holiday</div>
        <svg className='back-btn' width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4.79999 19.0197H20.16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


        {/* <!-- Month Selector --> */}
        <div class="month-selector">
          <select id="month">
            <option value="2025-07">July 2025</option>
            <option value="2025-08" selected>August 2025</option>
            <option value="2025-09">September 2025</option>
            <option value="2025-10">October 2025</option>
          </select>
        </div>

        <div className='calendra-btns'>
        <button class="nav-btn" onclick="prevPage()">
        <svg type='button' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="#0D2800" />
          </svg>
        </button>
          
          <svg type='button' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#0D2800" />
          </svg>

        </div>

        <p>Select dates to mark as holiday</p>

        {/* <!-- Holiday Selection Table --> */}
        <div class="calendar">
          <table>
            <tbody>
              <tr>
                <td><input type="checkbox" /> 1</td>
                <td><input type="checkbox" /> 11</td>
                <td><input type="checkbox" /> 21</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> 2</td>
                <td><input type="checkbox" /> 12</td>
                <td><input type="checkbox" /> 22</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> 3</td>
                <td><input type="checkbox" /> 13</td>
                <td><input type="checkbox" /> 23</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> 4</td>
                <td><input type="checkbox" /> 14</td>
                <td><input type="checkbox" /> 24</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> 5</td>
                <td><input type="checkbox" /> 15</td>
                <td><input type="checkbox" /> 25</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> 6</td>
                <td><input type="checkbox" /> 16</td>
                <td><input type="checkbox" /> 26</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> 7</td>
                <td><input type="checkbox" /> 17</td>
                <td><input type="checkbox" /> 27</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> 8</td>
                <td><input type="checkbox" /> 18</td>
                <td><input type="checkbox" /> 28</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> 9</td>
                <td><input type="checkbox" /> 19</td>
                <td><input type="checkbox" /> 29</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> 10</td>
                <td><input type="checkbox" /> 20</td>
                <td><input type="checkbox" /> 30</td>
              </tr>
              <tr>
                <td colspan="3" class="center">
                  <input type="checkbox" /> 31</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Buttons --> */}
        <div class="button-group">
          <button class="nav-btn" onclick="prevPage()">← Previous</button>
          <button class="save-btn">Save</button>
          <button class="nav-btn" onclick="nextPage()">Next →</button>
        </div>
      </div>


    </div>
  )
}

export default MarkHoliday