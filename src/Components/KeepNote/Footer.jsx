import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ position: "absolute", bottom: "0", border: "1px solid black", width: "100vw", textAlign: "Center" }}>
            <Typography>Footer</Typography>
        </Box>
    )
}

export default Footer;