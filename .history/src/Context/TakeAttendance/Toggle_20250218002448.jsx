import React from 'react'

function Toggle() {
    return (
        <div>
            <h3>toggle</h3><label class="switch">
                <input type="checkbox" onchange="toggleSwitch()">
                    <span class="slider"></span>
            </label></div>

    )
}

export default Toggle