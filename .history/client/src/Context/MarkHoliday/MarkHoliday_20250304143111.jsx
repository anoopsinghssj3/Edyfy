import React from 'react'

function MarkHoliday() {
  return (
    // mark holiday page-38

    <div className="mark-holiday">

      <div class="container">
        <a href="#" class="back-arrow">&larr;</a>
        <h1>Mark Holiday</h1>

        {/* <!-- Month Selector --> */}
        <div class="month-selector">
          <label for="month">Select Month:</label>
          <select id="month">
            <option value="2025-07">July 2025</option>
            <option value="2025-08" selected>August 2025</option>
            <option value="2025-09">September 2025</option>
            <option value="2025-10">October 2025</option>
          </select>
        </div>

        <p>Select dates to mark as holiday</p>

        {/* <!-- Holiday Selection Table --> */}
        <div class="calendar">
          <table>
            <tbody>
              <tr>
                <td><input type="checkbox"/> 1</td>
                <td><input type="checkbox"/> 11</td>
                <td><input type="checkbox"/> 21</td>
              </tr>
              <tr>
                <td><input type="checkbox"/> 2</td>
                <td><input type="checkbox"/> 12</td>
                <td><input type="checkbox"/> 22</td>
              </tr>
              <tr>
                <td><input type="checkbox"/> 3</td>
                <td><input type="checkbox"/> 13</td>
                <td><input type="checkbox"/> 23</td>
              </tr>
              <tr>
                <td><input type="checkbox"/> 4</td>
                <td><input type="checkbox"/> 14</td>
                <td><input type="checkbox"/> 24</td>
              </tr>
              <tr>
                <td><input type="checkbox"/> 5</td>
                <td><input type="checkbox"/> 15</td>
                <td><input type="checkbox"/> 25</td>
              </tr>
              <tr>
                <td><input type="checkbox"> 6</td>
                <td><input type="checkbox"> 16</td>
                <td><input type="checkbox"> 26</td>
              </tr>
              <tr>
                <td><input type="checkbox"> 7</td>
                <td><input type="checkbox"> 17</td>
                <td><input type="checkbox"> 27</td>
              </tr>
              <tr>
                <td><input type="checkbox"> 8</td>
                <td><input type="checkbox"> 18</td>
                <td><input type="checkbox"> 28</td>
              </tr>
              <tr>
                <td><input type="checkbox"> 9</td>
                <td><input type="checkbox"> 19</td>
                <td><input type="checkbox"> 29</td>
              </tr>
              <tr>
                <td><input type="checkbox"> 10</td>
                <td><input type="checkbox"> 20</td>
                <td><input type="checkbox"> 30</td>
              </tr>
              <tr>
                <td colspan="3" class="center"><input type="checkbox"> 31</td>
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