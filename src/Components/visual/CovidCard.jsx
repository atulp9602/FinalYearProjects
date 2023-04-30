import { Box, Card, Typography } from "@mui/material";
import React from "react";

const CovidCard = (props) => {
  return (
    <Card
      elevation="5"
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        minWidth: "160px",
        height: "150px",
        padding: 2,
        borderRadius: "8px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        color: "#8884D8",
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "#8884D8",
          color: "#FFFFFF",
        },
        width: "100%",
        border: "3px solid #8884D8",
        flex: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: "1.5rem", textTransform: "capitalize" }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: "1.8rem", fontWeight: "900", p: 1 }}
      >
        {props.count}
      </Typography>
    </Card>
  );
};

export default CovidCard;
