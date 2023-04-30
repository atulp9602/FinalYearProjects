import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const TableComp = ({ covidData, selectedPage, noOfDataPerPage }) => {

    const rows = ['ID', 'active', 'confirmed', 'deaths', 'deltaconfirmed', 'deltadeaths', 'lastupdatedtime', 'recovered', 'state'];
    let start = (noOfDataPerPage) * (selectedPage - 1);
    let end = (noOfDataPerPage) * (selectedPage);

    return (

        <TableContainer component={Paper} elevation={4} >
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow sx={{
                        backgroundColor:
                            '#C7C7C7',
                    }}>
                        {
                            rows.map((row, index) => (
                                <TableCell key={index}>{row}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {

                        covidData.slice(start, end).map((obj, index, arr) => (
                            <TableRow
                                key={index}
                                sx={{ '&:hover': { backgroundColor: "#D5D4D4" } }}
                            >
                                <TableCell align="center">{index + 1 + start}</TableCell>
                                <TableCell align="center">{obj[rows[1]]}</TableCell>
                                <TableCell align="center">{obj[rows[2]]}</TableCell>
                                <TableCell align="center">{obj[rows[3]]}</TableCell>
                                <TableCell align="center">{obj[rows[4]]}</TableCell>
                                <TableCell align="center">{obj[rows[5]]}</TableCell>
                                <TableCell align="center">{obj[rows[6]]}</TableCell>
                                <TableCell align="center">{obj[rows[7]]}</TableCell>
                                <TableCell align="center">{obj[rows[8]]}</TableCell>

                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>


    )


}

export default TableComp;