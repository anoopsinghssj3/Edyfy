import React from 'react'

function AddStudent() {
    return (
        <div className="add-student">
            <div class="container">
                <div className="sub-container">
                    <div className='title'>Add Student</div>
                    <div class="profile-pic">
                        <img src="profile-placeholder.png" alt="Student Photo" />
                    </div>
                </div>
                <form action="">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Riya Mishra" />

                    <div class="row">
                        <div>
                            <label for="class">Class</label>
                            <select id="class">
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                        </div>
                        <div>
                            <label for="section">Section</label>
                            <select id="section">
                                <option>A</option>
                                <option>B</option>
                            </select>
                        </div>
                    </div>

                    <label for="admission-number">Admission Number</label>
                    <input type="text" id="admission-number" placeholder="1350" />

                    <div class="row">
                        <div>
                            <label for="admission-month">Admission Month</label>
                            <select id="admission-month">
                                <option>July</option>
                                <option>August</option>
                            </select>
                        </div>
                        <div>
                            <label for="admission-year">Admission Year</label>
                            <input type="text" id="admission-year" placeholder="2022" />
                        </div>
                    </div>

                    <label for="parent-mobile">Mobile (Parent)</label>
                    <input type="text" id="parent-mobile" placeholder="7846284749" />

                    <label for="student-mobile">Mobile (Student)</label>
                    <input type="text" id="student-mobile" placeholder="7487347924" />
                    <div class="checkbox">
                        <input type="checkbox" id="same-as-parent"  className="same-as-parent-l" />
                        <label for="same-as-parent">Same as parent</label>
                    </div>

                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="riya123" />

                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="riya@@1220" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div >
    )
}

export default AddStudent