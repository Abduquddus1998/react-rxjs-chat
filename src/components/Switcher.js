import React, { useEffect, useState } from "react";
import chatStore from "../store/chat";
import { NavLink } from "react-router-dom";

export default function Switcher() {
  const [chatState, setChatState] = useState(chatStore.initialState);
  const location = window.location.href.split("/")[3];

  useEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const messageNotification = chatState.newDataCount > 0 && (
    <span className="notify">{chatState.newDataCount}</span>
  );

  return (
    <div className="switcher-div">
      <NavLink
        style={({ isActive }) => ({
          border: isActive ? "2px solid #00ade7" : "",
          padding: 0,
          borderRadius: 30,
        })}
        to={"/first-person"}
      >
        <button className="switcher">
          Person 1
          {location !== "first-person" &&
            location.length > 1 &&
            messageNotification}
        </button>
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          border: isActive ? "2px solid #06c406" : "",
          padding: 0,
          borderRadius: 30,
        })}
        to={"/second-person"}
      >
        <button className="switcher">
          Person 2{location !== "second-person" && messageNotification}
        </button>
      </NavLink>
    </div>
  );
}
