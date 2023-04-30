import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="container"
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        p: 2,
      }}
      component="div"
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          gap: 2,
          flexDirection: ["column", "column", "row-reverse"],
          justifyContent: ["flex-start", "flex-start", "space-between"],
          alignItems: ["space-between", "space-between", "center"],
        }}
        component="div"
      >
        <img
          className="homeImg"
          src={require("../assets/images/reactbg-2.png")}
          style={{
            maxWidth: "470px",
            maxHeight: "450px",
            alignSelf: "center",
            width: "80%",
          }}
        />

        <Box
          component="div"
          sx={{
            maxWidth: "600px",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: ["1.8em", "2.5em"],
              color: "#007CFF",
              fontWeight: 900,
              mb: 1,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Atul Patil
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: ["1.2em", "1.5em"],
              color: "#838383",
              mb: 1,
            }}
          >
            Welcome! This app shows you a list of React projects I've developed
            using Hooks, Routing concepts, and frontend libraries such as
            Bootstrap and MUI.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/Projects")}
            sx={{ mb: 1 }}
          >
            Visit Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
