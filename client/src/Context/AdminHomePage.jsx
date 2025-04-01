import React from "react"
import "../App.css"


function AdminHomePage() {
    const viewStudentProfile = () => {
        console.log("Viewing Student Profile");
    };

    const manageclassteachers = () => {
        console.log("Managing Class Teachers");
    };

    const viewteacher = () => {
        console.log("Viewing Teacher");
    };

    const addteacher = () => {
        console.log("Adding Teacher");
    };

    const markholiday = () => {
        console.log("Marking Holiday");
    };

    const addclass = () => {
        console.log("Adding Class");
    };

    function contactdevelopers() {
        console.log("This is clicked!");
    }

    return (
        //admin home page page-32
        <div className="admin-home-page">
            <div className="home-btn"><i className="fa-solid fa-house"></i></div>

            <div className="title">
                Welcome, Admin
            </div>
            <div className="button-container">
                <button onClick={viewStudentProfile()}>View Student Profile</button>
                <button onClick={manageclassteachers()}>Manage Class Teachers</button>
                <button onClick={viewteacher()}>View Teacher</button>
                <button onClick={addteacher()}>Add Teacher</button>
                <button onClick={markholiday()}>Mark Holiday</button>
                <button onClick={addclass()}>Add Class</button>
                <button onClick={contactdevelopers()}>Contact Developers</button>

            </div>

        </div>
    )
}

export default AdminHomePage