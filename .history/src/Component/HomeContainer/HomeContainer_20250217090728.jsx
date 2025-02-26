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
import AcademicReportsMarks from '../../Context/AcademicReportsMarks/AcademicReportsMarks'
import ClassTeacherHomePage from '../../Context/ClassTeacherHomePage/ClassTeacherHomePage'
import StudentsProfile from '../../Context/StudentsProfile/StudentsProfile'
import AddStudent from '../../Context/AddStudent/AddStudent'

function HomeContainer() {
    return (
        <div className="home-container">
            {/* <SignInAs /> */}
            {/* <SignIn /> */}
            {/* <RegisterAsAdmin /> */}
            {/* <StudentHomePage /> */}
            {/* <StudentProfile /> */}
            {/* <Attendance /> */}
            {/* <VariousColorRoles /> */}
            {/* <StudentAttendanceSummary /> */}
            {/* <AcademicReports /> */}
            <AcademicReportsMarks />
            {/*  <ClassTeacherHomePage /> */}
            {/* <ClassTeacherHomePage /> */}
            {/* <StudentsProfile/> */}
            {/* <AddStudent /> */}
        </div>
    )
}

export default HomeContainer