import React, { useState } from "react";
import "../App.css";

function SignIn() {
    // State for form fields and validation
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false); // For Bootstrap validation

    const handleSubmit = (event) => {
        const form = event.target;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        // sign in page as btn type page-2,3,4
        <div className="sign-in">
            <div className="title">Sign In</div>

            {/* Back Button Icon */}
            <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Home Button Icon */}
            <div className="home-btn">
                <i className="fa-solid fa-house"></i>
            </div>

            <div className="container">
                <form noValidate onSubmit={handleSubmit} className={validated ? "was-validated" : ""}>
                    {/* Username Field */}
                    <div className="username">
                        <label className="user-l" htmlFor="username">Username</label>
                        <input
                            className="user-i form-control"
                            type="text"
                            id="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback invalid-feedback-username">Username is required!</div>
                    </div>

                    {/* Password Field */}
                    <div className="password"><label className="pass-l" htmlFor="password">Password</label>
                        <input
                            className="pass-i form-control"
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback invalid-feedback-password">Password is required!</div>
                         {/* <svg xmlns="http://www.w3.org/2000/svg" className="visibility-on" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19ZM12 17C13.8833 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8833 6 12 6C10.1167 6 8.3875 6.49583 6.8125 7.4875C5.2375 8.47917 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5042 10.1167 17 12 17Z" fill="#1F2619" />
                        </svg> */}

                        {/* or togglwe password */}


                        <svg xmlns="http://www.w3.org/2000/svg" className="visibility-off" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.1 13.3L14.65 11.85C14.8 11.0667 14.575 10.3333 13.975 9.65C13.375 8.96667 12.6 8.7 11.65 8.85L10.2 7.4C10.4833 7.26667 10.7708 7.16667 11.0625 7.1C11.3542 7.03334 11.6667 7 12 7C13.25 7 14.3125 7.4375 15.1875 8.3125C16.0625 9.1875 16.5 10.25 16.5 11.5C16.5 11.8333 16.4667 12.1458 16.4 12.4375C16.3333 12.7292 16.2333 13.0167 16.1 13.3ZM19.3 16.45L17.85 15.05C18.4833 14.5667 19.0458 14.0375 19.5375 13.4625C20.0292 12.8875 20.45 12.2333 20.8 11.5C19.9667 9.81667 18.7708 8.47917 17.2125 7.4875C15.6542 6.49584 13.9167 6 12 6C11.5167 6 11.0417 6.03334 10.575 6.1C10.1083 6.16667 9.65 6.26667 9.2 6.4L7.65 4.85C8.33333 4.56667 9.03333 4.35417 9.75 4.2125C10.4667 4.07084 11.2167 4 12 4C14.5167 4 16.7583 4.69584 18.725 6.0875C20.6917 7.47917 22.1167 9.28334 23 11.5C22.6167 12.4833 22.1125 13.3958 21.4875 14.2375C20.8625 15.0792 20.1333 15.8167 19.3 16.45ZM19.8 22.6L15.6 18.45C15.0167 18.6333 14.4292 18.7708 13.8375 18.8625C13.2458 18.9542 12.6333 19 12 19C9.48333 19 7.24167 18.3042 5.275 16.9125C3.30833 15.5208 1.88333 13.7167 1 11.5C1.35 10.6167 1.79167 9.79584 2.325 9.0375C2.85833 8.27917 3.46667 7.6 4.15 7L1.4 4.2L2.8 2.8L21.2 21.2L19.8 22.6ZM5.55 8.4C5.06667 8.83334 4.625 9.30834 4.225 9.825C3.825 10.3417 3.48333 10.9 3.2 11.5C4.03333 13.1833 5.22917 14.5208 6.7875 15.5125C8.34583 16.5042 10.0833 17 12 17C12.3333 17 12.6583 16.9792 12.975 16.9375C13.2917 16.8958 13.6167 16.85 13.95 16.8L13.05 15.85C12.8667 15.9 12.6917 15.9375 12.525 15.9625C12.3583 15.9875 12.1833 16 12 16C10.75 16 9.6875 15.5625 8.8125 14.6875C7.9375 13.8125 7.5 12.75 7.5 11.5C7.5 11.3167 7.5125 11.1417 7.5375 10.975C7.5625 10.8083 7.6 10.6333 7.65 10.45L5.55 8.4Z" fill="#1F2619" />
                        </svg> 
                    </div>
                    {/* Submit Button */}
                    <button className="sign-in-btn btn" type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
