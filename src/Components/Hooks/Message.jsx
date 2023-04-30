import React from 'react';


const Message = (props) => {
    console.log(props.msg);

    let themeColor = props.themeColor;
    return (
        <>
            <div className={`typed_msg_box ${themeColor}-typed_msg_box`} >
                <ul className={`list_container ${themeColor}-list_container`}>
                    {
                        props.msg.map((msg, ind) =>
                            (<li key={ind + 1}>{msg}</li>)
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Message;