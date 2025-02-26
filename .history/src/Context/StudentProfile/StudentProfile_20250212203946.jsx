import React from 'react'

function StudentProfile() {
    return (
        // student profile to view for student

        <div className="student-profile">
            <div class="container">
                <a href="#" class="back-arrow">&larr;</a>
                <div className="sub-container">
                    <div className='title'>Profile</div>
                    <div class="profile-pic">
                        <img src="profile-placeholder.png" alt="Student Photo" />
                    </div>
                </div>

                <form action="">
                    <label for="name">Name</label>
                    <div className='input-type' type="text" id="name" placeholder="Riya Mishra" ></div>

                    <div className="row">
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
                    <div className='input-type' type="text" id="admission-number" placeholder="1350"></div>

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
                            <div className='input-type' type="text" id="admission-year" placeholder="2022" ></div>
                        </div>
                    </div>

                    <label for="parent-mobile">Mobile Parent</label>
                    <div type="text" id="parent-mobile" placeholder="7846284749" ></div>

                    <label for="student-mobile">Mobile Student</label>
                    <div type="text" id="student-mobile" placeholder="7487347924" ></div>
                    <div class="checkbox">
                        <input className='same-as-parent-i' type="checkbox" id="same-as-parent" />
                        <label className='same-as-parent-l' for="same-as-parent">Same as parent</label>
                    </div>

                    <label for="username">Username</label>
                    <div className='input-type' type="text" id="username" placeholder="riya123" ></div>

                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="riya@@1220" />

                </form>

            </div>
        </div>
    )
}

export default StudentProfile