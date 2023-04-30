import React, { useState } from "react";

const Time = () => {
  function getTime() {
    let date = new Date();
    let newTime = date.toLocaleTimeString().toUpperCase();
    return newTime;
  }

  const [time, updateTime] = useState(getTime());

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#96d99e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ textTransform: "uppercase", padding: "10px", flex: 0 }}>
        Timer
      </h2>
      <div className="timer_div">
        <h1>{time}</h1>
        <button
          id="timer_btn"
          onClick={() => {
            updateTime(getTime());
          }}
        >
          Get Time
        </button>
      </div>
    </div>
  );
};

export default Time;
