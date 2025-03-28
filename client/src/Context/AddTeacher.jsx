import React from "react"
import "../App.css"

function AddTeacher() {
    // add teacher page-39
    return (
        <div className="add-teacher">
            <div className="container">
                <div className="title">Add Teacher</div>
                <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <form action="">
                    <label htmlFor="name">Teacher"s Name</label>
                    <input type="text" id="name" placeholder="enter teacher name " />

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="enter teacher username ,eg: garima123" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="enter password" />

                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddTeacher