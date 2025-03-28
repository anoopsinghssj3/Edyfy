import React from "react"
import "../App.css"

function AddStudent() {
    return (
        // add student page -23, 35

        <div className="add-student">

            <div className="container">
                <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="sub-container">

                    <div className="title">Add Student</div>

                    <div className="profile-pic">
                        <img src="profile-placeholder.png" alt="Student Photo" />
                    </div>
                </div>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Riya Mishra" />

                    <div className="row">
                        <div>
                            <label htmlFor="class">Class</label>
                            <select id="class">
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="section">Section</label>
                            <select id="section">
                                <option>A</option>
                                <option>B</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="admission-number">Admission Number</label>
                    <input type="text" id="admission-number" placeholder="1350" />

                    <div className="row">
                        <div>
                            <label htmlFor="admission-month">Admission Month</label>
                            <select id="admission-month">
                                <option>July</option>
                                <option>August</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="admission-year">Admission Year</label>
                            <input type="text" id="admission-year" placeholder="2022" />
                        </div>
                    </div>

                    <label htmlFor="parent-mobile">Mobile (Parent)</label>
                    <input type="text" id="parent-mobile" placeholder="7846284749" />

                    <label htmlFor="student-mobile">Mobile (Student)</label>
                    <input type="text" id="student-mobile" placeholder="7487347924" />
                    <div className="checkbox">
                        <input type="checkbox" id="same-as-parent" className="same-as-parent-i" />
                        <label htmlFor="same-as-parent" className="same-as-parent-l" >Same as parent</label>
                    </div>
                    <div className="sub-container-2">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="riya123" />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="riya@@1220" />

                        <button type="submit">Submit</button>

                        {/* delete button */}
                        {/* <button className="delete-btn">                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_55_713)">
                                <path d="M19 33C18.45 33 17.9792 32.8042 17.5875 32.4125C17.1958 32.0208 17 31.55 17 31V18H16V16H21V15H27V16H32V18H31V31C31 31.55 30.8042 32.0208 30.4125 32.4125C30.0208 32.8042 29.55 33 29 33H19ZM29 18H19V31H29V18ZM21 29H23V20H21V29ZM25 29H27V20H25V29Z" fill="#25232B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_55_713">
                                    <rect x="4" y="4" width="40" height="40" rx="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        </button> */}

                    </div>
                </form>
            </div>
        </div >
    )
}

export default AddStudent