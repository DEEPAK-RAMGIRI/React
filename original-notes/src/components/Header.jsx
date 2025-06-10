import React, { useState } from "react";

function Header() {
  const d = new Date();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const updatetime = () => setTime(new Date().toLocaleTimeString());

  return (
    <header>
      <div className="header-content">
        <h1>MY NOTES</h1>
        <div className="time-box">Time: {time}</div>
      </div>
    </header>
  );
}

export default Header;
