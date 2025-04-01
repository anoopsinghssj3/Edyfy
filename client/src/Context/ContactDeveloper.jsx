import React from "react"
import "../App.css"
function ContactDeveloper() {
    return (
        // contact developer page-41
        <div className="contact-developer">
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokewinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>

            <div className="container">
                <h1 className="title">Contact Developers</h1>

                <div className="sub-container">
                    <label htmlFor="phone1">Phone 1</label>
                    <input type="text" id="phone1" value="9XXXXXXXXX" readOnly />

                    <label htmlFor="phone2">Phone 2</label>
                    <input type="text" id="phone2" value="9XXXXXXXXX" readOnly />

                    <label htmlFor="email">Email us at :</label>
                    <input type="text" id="email" value="xyzcompany@gmail.com" readOnly />
                </div>
            </div>
        </div>
    )
}

export default ContactDeveloper