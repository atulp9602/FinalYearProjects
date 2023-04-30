import React from 'react';

const List = ({ handleRemove, todo, id }) => {
    return (
        <>
            <li><i className="fa fa-trash fa-4px" style={{ margin: "1px", cursor: "pointer" }} onClick={() => handleRemove(id)}></i>{todo}</li>
        </>
    )
}

export default List;