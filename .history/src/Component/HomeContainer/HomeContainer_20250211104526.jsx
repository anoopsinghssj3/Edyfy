import React from 'react'
import SignInAs from '../../Context/SignInAs/SignInAs'
import SignIn from '../../Context/SignIn/SignIn'
import RegisterAsAdmin from '../../Context/RegisterAsAdmin/RegisterAsAdmin'

function HomeContainer() {
    return (
        <div className="home-container">
            {/* <SignInAs /> */}
            {/* <SignIn /> */}
            <RegisterAsAdmin />

        </div>
    )
}

export default HomeContainer