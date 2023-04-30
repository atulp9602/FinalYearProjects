import React, { useState } from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Inc_Dec = () => {
  const [num, setNum] = useState(0);

  return (
    <Box
      component="div"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: " center",
        p: 2,
        backgroundColor: "whitesmoke",
      }}
    >
      <Typography
        variant="subtitle1"
        textAlign="center"
        sx={{
          fontSize: ["1.5em", "1.8em", "2.3em"],
          textTransform: "uppercase",
        }}
      >
        Inc/Dec Counter
      </Typography>
      <Box
        component="div"
        sx={{
          my: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          maxHeight: "320px",
          maxWidth: "350px",
          width: "100%",
          boxShadow: 6,
          borderRadius: 4,
          paddingY: 4,
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ fontSize: ["3rem", "4rem"] }}
        >
          {num}
        </Typography>

        <ButtonGroup variant="contained">
          <Button onClick={() => setNum(num + 1)} color="success">
            <AddIcon />
          </Button>
          <Button
            color="error"
            onClick={() => {
              if (num > 0) {
                setNum(num - 1);
              } else {
                alert("You have reached to zero");
                setNum(num);
              }
            }}
          >
            <RemoveIcon />
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Inc_Dec;
