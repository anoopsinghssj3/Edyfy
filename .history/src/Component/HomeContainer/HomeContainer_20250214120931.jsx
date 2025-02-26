import React from 'react'
import SignInAs from '../../Context/SignInAs/SignInAs'
import SignIn from '../../Context/SignIn/SignIn'
import RegisterAsAdmin from '../../Context/RegisterAsAdmin/RegisterAsAdmin'
import StudentHomePage from '../../Context/StudentHomePage/StudentHomePage'
import StudentProfile from '../../Context/StudentProfile/StudentProfile'
import Attendance from '../../Context/Attendance/Attendance'
import VariousColorRoles from '../../Context/VariousColorRoles/VariousColorRoles'
import StudentAttendanceSummary from '../../Context/StudentAttendanceSummary/StudentAttendanceSummary'
import AcademicReports from '../../Context/AcademicReports/AcademicReports'

function HomeContainer() {
    return (
        <div className="home-container">
            {/* <SignInAs /> */}
            {/* <SignIn /> */}
            {/* <RegisterAsAdmin /> */}
            {/* <StudentHomePage /> */}
            <StudentProfile />
            {/* <Attendance /> */}
            {/* <VariousColorRoles /> */}
            {/* <StudentAttendanceSummary /> */}
            {/* <AcademicReports /> */}
        </div>
    )
}

export default HomeContainer