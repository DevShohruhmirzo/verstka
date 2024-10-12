import React from 'react'
import "./Chat.css"

function Chat() {
  return (
    <div>
      <h1>Chat</h1>
      <div className="chat">
        <div className="chat__right"></div>
        <div className="chat__center"></div>
        <div className="chat__left">
          <div className="chat__box">
            <div className="chat__card">
              <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2312" alt="" />
              <span>
                <h2>Proyektor</h2>
                <p>Hozzir aktiv</p>
              </span>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Chat
