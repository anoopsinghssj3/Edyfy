import React from "react";
import "../App.css";

function VariousColorRoles({ closePopup }) {
    return (
        <div className="various-color-roles">
            <div className="container">

                <div className="card">
                    <div className="title">Various color roles</div>
                    <div className="close-svg">
                        <div onClick={closePopup} className="">
                        <i class="fa-solid fa-circle-xmark"></i>
                        </div>

                    </div>

                    <div className="role">
                        <span className="circle black">1</span>
                        <span>Present</span>
                    </div>
                    <div className="role">
                        <span className="circle yellow">8</span>
                        <span>Official Holiday</span>
                    </div>
                    <div className="role">
                        <span className="circle red-outline">6</span>
                        <span>Sunday</span>
                    </div>
                    <div className="role">
                        <span className="circle red">15</span>
                        <span>Absent</span>
                    </div>
                    <div className="role">
                        <span className="circle outline">6</span>
                        <span>Today's date</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VariousColorRoles;
