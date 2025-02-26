import React from 'react'
import "../../App.css"

function VariousColorRoles() {
    return (
// only for color understand
        <div className="various-color-roles">
            <div class="container">
                <div class="card">
                    <div className='title'>Various color roles</div>
                    <div class="role">
                        <span class="circle black">1</span>
                        <span>Present</span>
                    </div>
                    <div class="role">
                        <span class="circle yellow">8</span>
                        <span>Official Holiday</span>
                    </div>
                    <div class="role">
                        <span class="circle red-outline">6</span>
                        <span>Sunday</span>
                    </div>
                    <div class="role">
                        <span class="circle red">15</span>
                        <span>Absent</span>
                    </div>
                    <div class="role">
                        <span class="circle outline">6</span>
                        <span>Today's date</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
import App from '../../App'

export default VariousColorRoles