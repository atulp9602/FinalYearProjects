import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const SelectComp = ({ covidData, handleStateChange, stateName }) => {


    const handleChange = (event) => {
        handleStateChange(event.target.value);
    };

    return (
        <FormControl fullWidth>

            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stateName}
                onChange={handleChange}

            >
                {
                    covidData && covidData.map((obj, ind, arr) => {
                        return (

                            <MenuItem key={ind} value={obj.state}>{obj.state}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default SelectComp;