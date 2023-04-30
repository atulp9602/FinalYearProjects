import React from 'react';
import { AppBar, Box, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const Header = () => {
    return (
        <>

            <Box sx={{
                boxShadow: 5, p: 1, backgroundColor: "#FFC300", display: "flex", gap: [0.25, 0.8, 1], alignItems: "center", height: ['40px', '50px', '60px'], padding: "5px", marginBottom: "30px"

            }}>
                <TextSnippetIcon sx={{ color: "white", fontSize: ['2em', '2.5em'] }} />
                <Typography color="secondary.light" variant='h5' sx={{ flexGrow: 1, fontSize: ['1.5em', '2em'] }}>
                    Keep Note
                </Typography>
            </Box>

        </>

    )

}

export default Header;