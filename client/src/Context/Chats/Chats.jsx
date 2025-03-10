import React from 'react'
import '../../App.css'

function Chats() {
    return (
        // chats page-15
        <div className="chats">
            <div class="container"><svg className='back-btn' width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.79999 19.0197H20.16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                <div class="header">

                    <div className='title'>Chats</div>
                </div>

                <div className='sub-title'>Messages</div>

                <div class="chat-list">
                    <div class="chat">
                        <button class="chat-icon"></button>
                        <button class="chat-info">
                            <h3>Abhinav Singh</h3>
                            <p>4+ new messages</p>
                        </button>
                        <div class="chat-meta">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="5" fill="#16E643" />
                            </svg></div>
                            <div class="chat-time">17:30</div>
                        </div>
                    </div>

                    <div class="chat">
                        <button class="chat-icon"></button>
                        <button class="chat-info">
                            <h3>Name</h3>
                            <p>4 new messages</p>
                        </button >
                        <div class="chat-meta">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="5" fill="#16E643" />
                            </svg></div>
                            <div class="chat-time">Yesterday</div>
                        </div>
                    </div>

                    
                    <div class="chat">
                        <button class="chat-icon"></button>
                        <button class="chat-info">
                            <h3>Name</h3>
                            <p>4 new messages</p>
                        </button >
                        <div class="chat-meta">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="5" fill="#16E643" />
                            </svg></div>
                            <div class="chat-time">12:30</div>
                        </div>
                    </div>

                    <div class="chat">
                        <button class="chat-icon"></button>
                        <button class="chat-info">
                            <h3>Name</h3>
                            <p>4 new messages</p>
                        </button >
                        <div class="chat-meta">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="5" fill="#16E643" />
                            </svg></div>
                            <div class="chat-time">19:09</div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Chats