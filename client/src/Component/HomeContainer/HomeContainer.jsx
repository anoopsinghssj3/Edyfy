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
import AddStudent from '../../Context/AddStudent/AddStudent'
import TakeAttendance from '../../Context/TakeAttendance/TakeAttendance'
import SelectDateForAttendance from '../../Context/SelectDateForAttendance/SelectDateForAttendance'
import SelectStudentAddReport from '../../Context/SelectStudentAddReport/SelectStudentAddReport'
import AddReport from '../../Context/AddReport/AddReport'
import AddReportofExam from '../../Context/AddReportofExam/AddReportofExam'
import AdminHomePage from '../../Context/AdminHomePage/AdminHomePage'
import SelectClassForAttendance from '../../Context/SelectClassForAttendance/SelectClassForAttendance'
import ManageClassTeacher from '../../Context/ManageClassTeacher/ManageClassTeacher'
import Allteacher from '../../Context/AllTeacher/Allteacher'
import MarkHoliday from '../../Context/MarkHoliday/MarkHoliday'
import AddTeacher from '../../Context/AddTeacher/AddTeacher'
import AddClass from '../../Context/AddClass/AddClass'
import ContactDeveloper from '../../Context/ContactDeveloper/ContactDeveloper'
import Chats from '../../Context/Chats/Chats'
import SpecificChat from '../../Context/SpecificChat/SpecificChat'
import AllStudent from '../../Context/AllStudent/AllStudent'

function HomeContainer() {
    return (
        <div className="home-container">
            {/* <SignInAs /> */}
            {/* <SignIn /> */}
            {/* <RegisterAsAdmin /> */}
            {/* <StudentHomePage /> */}
            {/* <StudentProfile /> */}
            {/* <Attendance /> */}
            <VariousColorRoles />
            {/* <StudentAttendanceSummary /> */}
            {/* <AcademicReports /> */}
            {/* <AcademicReportsMarks /> */}
            {/* <ClassTeacherHomePage /> */}
            {/* <AllStudent/> */}
            {/* <AddStudent /> */}
            {/* <SelectDateForAttendance /> */}
            {/* <TakeAttendance /> */}
            {/* <SelectStudentAddReport/> */}
            {/* <AddReport/> */}
            {/* <AddReportofExam /> */}
            {/* <AdminHomePage/> */}
            {/* <SelectClassForAttendance/> */}
            {/* <ManageClassTeacher /> */}
            {/* <Allteacher /> */}
            {/* <MarkHoliday/> */}
            {/* <AddTeacher /> */}
            {/* <AddClass /> */}
            {/* <ContactDeveloper/> */}
            {/* <Chats/> */}
            {/* <SpecificChat/> */}
        </div>
    )
}

export default HomeContainer