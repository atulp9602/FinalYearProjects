import React from 'react';
import { Pagination } from '@mui/material';

const PaginationComp = ({ dataLength, noOfDataPerPage, displayData, pageNo }) => {
    console.log(dataLength, noOfDataPerPage);
    const count = Math.ceil(dataLength / noOfDataPerPage);
    console.log(count);
    return (
        <Pagination count={count} page={pageNo} onChange={(e, page) => displayData(page)} />
    )
}

export default PaginationComp;