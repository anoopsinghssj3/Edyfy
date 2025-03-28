// import React from 'react'
// import "../App.css"

// function VariousColorRoles() {
//     return (
//         // only for color understand
//         <div className="various-color-roles">
//             <div class="container">
//                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M21.12 28L24 25.12L26.88 28L28 26.88L25.12 24L28 21.12L26.88 20L24 22.88L21.12 20L20 21.12L22.88 24L20 26.88L21.12 28ZM24 32C22.8933 32 21.8533 31.79 20.88 31.37C19.9067 30.95 19.06 30.38 18.34 29.66C17.62 28.94 17.05 28.0933 16.63 27.12C16.21 26.1467 16 25.1067 16 24C16 22.8933 16.21 21.8533 16.63 20.88C17.05 19.9067 17.62 19.06 18.34 18.34C19.06 17.62 19.9067 17.05 20.88 16.63C21.8533 16.21 22.8933 16 24 16C25.1067 16 26.1467 16.21 27.12 16.63C28.0933 17.05 28.94 17.62 29.66 18.34C30.38 19.06 30.95 19.9067 31.37 20.88C31.79 21.8533 32 22.8933 32 24C32 25.1067 31.79 26.1467 31.37 27.12C30.95 28.0933 30.38 28.94 29.66 29.66C28.94 30.38 28.0933 30.95 27.12 31.37C26.1467 31.79 25.1067 32 24 32ZM24 30.4C25.7867 30.4 27.3 29.78 28.54 28.54C29.78 27.3 30.4 25.7867 30.4 24C30.4 22.2133 29.78 20.7 28.54 19.46C27.3 18.22 25.7867 17.6 24 17.6C22.2133 17.6 20.7 18.22 19.46 19.46C18.22 20.7 17.6 22.2133 17.6 24C17.6 25.7867 18.22 27.3 19.46 28.54C20.7 29.78 22.2133 30.4 24 30.4Z" fill="black" />
//                 </svg>

//                 <div class="card">
//                     <div className='title'>Various color roles</div>

//                     <div class="role">
//                         <span class="circle black">1</span>
//                         <span>Present</span>
//                     </div>
//                     <div class="role">
//                         <span class="circle yellow">8</span>
//                         <span>Official Holiday</span>
//                     </div>
//                     <div class="role">
//                         <span class="circle red-outline">6</span>
//                         <span>Sunday</span>
//                     </div>
//                     <div class="role">
//                         <span class="circle red">15</span>
//                         <span>Absent</span>
//                     </div>
//                     <div class="role">
//                         <span class="circle outline">6</span>
//                         <span>Today's date</span>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default VariousColorRoles

import React from 'react';
import "../App.css";

function VariousColorRoles({ closePopup }) {
    return (
        <div className="various-color-roles">
            <div className="container">

                <div className="card">
                    <div className='title'>Various color roles</div>

                    <div className="role">
                        {/* Close Button with SVG */}
                        <svg className="close-svg"
                            onClick={closePopup}
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M6 18L18 6M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
