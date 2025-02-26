import React from 'react'
import SignInAs from '../../Context/SignInAs/SignInAs'
import SignIn from '../../Context/SignIn/SignIn'
import RegisterAsAdmin from '../../Context/RegisterAsAdmin/RegisterAsAdmin'
import StudentHomePage from '../../Context/StudentHomePage/StudentHomePage'
import StudentProfile from '../../Context/StudentProfile/StudentProfile'
import Attendance from '../../Context/Attendance/Attendance'

function HomeContainer() {
    return (
        <div className="home-container">
            {/* <SignInAs /> */}
            {/* <SignIn /> */}
            {/* <RegisterAsAdmin /> */}
            {/* <StudentHomePage /> */}
            <StudentProfile />
            {/* <Attendance /> */}
        </div>
    )
}

export default HomeContainer