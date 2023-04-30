import React, { useState } from 'react';

export default function ObjectState() {

    const [detail, setDetail] = useState({
        fname: "",
        lname: "",
        email: "",
        contact: ""
    })

    function handleSetDetail(e) {
        let value = e.target.value;
        let name = e.target.name;
        console.log(name);
        setDetail((prevDetail) => {
            return {
                ...prevDetail,
                [name]: value
            }
        })
        console.log(value);
    }

    return (
        <div className='main_container'>
            <h2 style={{ textTransform: "uppercase", padding: "10px", flex:0 }}>Display</h2>
            <div className='display_form_container' >
                <div className='display'>
                    {
                        Object.entries(detail).some((value) =>
                            value[1] !== "") ? (
                            <>
                                <h1>{detail.fname}  {detail.lname}</h1>
                                <p>{detail.email} {detail.contact}</p>
                            </>

                        ) :
                            <h1>Fill the below fields</h1>
                    }
                </div>
                <div className='inputs_div'>
                    <input type='text' name='fname' placeholder='Enter first name' value={detail.fname} onChange={(e) => handleSetDetail(e)} />
                    <input type='text' name='lname' placeholder='Entr Last name' value={detail.lname} onChange={(e) => handleSetDetail(e)} />
                    <input type='text' name='email' placeholder='Enter Email' value={detail.email} onChange={(e) => handleSetDetail(e)} />
                    <input type='text' name='contact' placeholder='Enter Contact number' value={detail.contact} onChange={(e) => handleSetDetail(e)} />

                </div>
            </div>

        </div>

    )
}