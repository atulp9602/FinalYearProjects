import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBarComp = ({ handleSearch }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        // label="Search"
        placeholder="Search note by Title"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        sx={{
          maxWidth: "450px",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default SearchBarComp;
