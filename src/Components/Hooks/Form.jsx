import React, { useCallback, useContext, useEffect, useState } from "react";
import Message from "./Message";
// import { ThemeContext } from '../App';

const Form = () => {
  const [status, setStatus] = useState("Stopped Typing");
  const [msg, setMsg] = useState("");
  const [msgArr, setMsgArr] = useState([]);
  const [emptyFlag, setEmptyFlag] = useState(false);
  const [sendFlag, setSendFlag] = useState(false);
  // let themeColor = useContext(ThemeContext);

  // themeColor = themeColor === 'Normal' ? 'Dark' : 'Normal';

  // console.log(themeColor);

  //it is used for asynchrounous operation
  //means first msg set then flag set and then update our staus
  useEffect(() => {
    msg ? setEmptyFlag(true) : setEmptyFlag(false);
    emptyFlag ? setStatus("Typing...") : setStatus("Stopped Typing");
  }, [msg, emptyFlag]);
  const send_message = async () => {
    if (msg) {
      setMsgArr((prevMsgs) => {
        return [...prevMsgs, msg];
      });
    } else {
      setMsgArr((prevMsgs) => [...prevMsgs]);
    }
    console.log(msgArr);
    setSendFlag(true);
    setMsg("");
  };

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
      <h2 style={{ textTransform: "uppercase", padding: "10px", flex: 0  }}>
        Message Box
      </h2>
      <form className="form_div" onSubmit={(e) => e.preventDefault()}>
        <div className={`msg_box_container`}>
          <p className={`status `}>{status}</p>
          <div className={`msg_box `}>
            {sendFlag && <Message msg={msgArr} />}
            <div className="input_or_btn">
              <input
                type="text"
                placeholder="Enter Message"
                id="input"
                value={msg}
                onChange={(e) => {
                  console.log(e.target.value);
                  setMsg(e.target.value);
                }}
              />
              <button id="send_icon" onClick={send_message}>
                <img
                  src={require("../../assets/images/send.png")}
                  width="25px"
                  height="25px"
                />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
