import React from "react"
import "../App.css"


function Chats() {

    return (
        // chats page-15
        <div className="chats">
            <div className="container">
                <svg className="back-btn" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64001 27.7371L2.88 19.0197L8.64001 10.3024" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.79999 19.0197H20.16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="header">

                    <div className="title">Chats</div>
                </div>

                <div className="sub-title">Messages</div>

                <div className="chat-list">
                    <div className="chat">
                        <button className="chat-icon"></button>
                        <div className="chat-box">
                            <button className="chat-info">
                                <h3>Abhinav Singh</h3>
                                <p>4+ new messages</p>
                            </button>
                            <button className="chat-meta">
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="5" fill="#16E643" />
                                </svg></div>
                                <div className="chat-time">17:30</div>
                            </button>
                        </div>
                    </div>

                    <div className="chat">
                        <button className="chat-icon"></button>
                        <div className="chat-box">
                            <button className="chat-info">
                                <h3>Abhinav Singh</h3>
                                <p>4+ new messages</p>
                            </button>
                            <button className="chat-meta">
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="5" fill="#16E643" />
                                </svg></div>
                                <div className="chat-time">30 min ago</div>
                            </button>
                        </div>
                    </div>

                    <div className="chat">
                        <button className="chat-icon"></button>
                        <div className="chat-box">
                            <button className="chat-info">
                                <h3>Abhinav Singh</h3>
                                <p>4+ new messages</p>
                            </button>
                            <button className="chat-meta">
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="5" fill="#16E643" />
                                </svg></div>
                                <div className="chat-time">10/12/25</div>
                            </button>
                        </div>
                    </div>

                    <div className="chat">
                        <button className="chat-icon"></button>
                        <div className="chat-box">
                            <button className="chat-info">
                                <h3>Abhinav Singh</h3>
                                <p>4+ new messages</p>
                            </button>
                            <button className="chat-meta">
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="5" fill="#16E643" />
                                </svg></div>
                                <div className="chat-time">yesterday</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Chats