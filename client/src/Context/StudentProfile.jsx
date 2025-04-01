import React from "react"
import "../App.css"
function StudentProfile() {
    return (
        // student profile to view for student page-7

        <div className="student-profile">{/* Back Button Icon */}
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Home Button Icon */}
            <div className="home-btn">
                <i className="fa-solid fa-house"></i>
            </div>

            <div className="container">
                <div className="sub-container">
                    <div className="title">Profile</div>
                    <div className="profile-pic">
                        <img src="profile-placeholder.png" alt="Student Photo" />
                    </div>
                </div>

                <form action="">
                    <label htmlFor="name">Name</label>
                    <div className="input-type" type="text" id="name" placeholder="Riya Mishra" ></div>

                    <div className="row">
                        <div>
                            <label htmlFor="class">Class</label>
                            <div id="class"
                                className=" input-type">
                                5</div>
                        </div>
                        <div>
                            <label htmlFor="section">Section</label>
                            <div id="section" className=" input-type">
                                A</div>
                        </div>

                    </div>


                    <label htmlFor="admission-number">Admission Number</label>
                    <div className="input-type" type="text" id="admission-number" placeholder="1350"></div>

                    <div className="row">
                        <div>
                            <label htmlFor="">Admission Month</label>
                            <div className="input-type" id="admission-month">
                                July
                            </div>
                        </div>
                        <div>
                            <label htmlFor="admission-year">Admission Year</label>
                            <div className="input-type" type="text" id="admission-year" placeholder="2022" ></div>
                        </div>
                    </div>

                    <label htmlFor="parent-mobile">Mobile Parent</label>
                    <div className="input-type" type="text" id="parent-mobile" placeholder="7846284749" ></div>

                    <label htmlFor="student-mobile">Mobile Student</label>
                    <div className="input-type" type="text" id="student-mobile" placeholder="7487347924" ></div>
                    <div className="checkbox">
                        {/* <input className="same-as-parent-i" type="checkbox" id="same-as-parent" />
                        <label className="same-as-parent-l" htmlFor="same-as-parent">Same as parent</label> */}
                    </div>

                    <label htmlFor="username">Username</label>
                    <div className="input-type" type="text" id="username" placeholder="riya123" ></div>

                    {/* <label htmlFor="password">Password</label>
                    <div type="password" id="password" placeholder="riya@@1220" ></div> */}

                </form>

            </div>
        </div>
    )
}

export default StudentProfile