import React, { useState } from "react";

const Clock = () => {
  function getTime() {
    let date = new Date();
    let newTime = date.toLocaleTimeString().toUpperCase();
    return newTime;
  }
  const [time, updateTime] = useState(getTime());
  setInterval(() => {
    updateTime(getTime());
  }, 1000);
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
        Digtial Clock
      </h2>
      <div className="clock_div">
        <h1> {time}</h1>
      </div>
    </div>
  );
};

export default Clock;
