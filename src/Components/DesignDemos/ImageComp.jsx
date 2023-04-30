import React from 'react';

const ImageComp = (props) => {
    const imgUrl = `https://source.unsplash.com/random/400x300/?${props.imgTerm}`;
    return (
        <div>
            <img src={imgUrl} alt="search" style={{
                width: "100%",
            }} />
        </div>
    )
}

export default ImageComp;