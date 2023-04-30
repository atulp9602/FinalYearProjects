import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const About = () => {
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
          gap: [5, 2],
          flexDirection: ["column", "column", "row-reverse"],
          justifyContent: ["flex-start", "flex-start", "space-between"],
          alignItems: ["space-between", "space-between", "center"],
        }}
        component="div"
      >
        <img
          className="aboutImg"
          src={require("../assets/images/reactbg-3.png")}
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
            variant="h4"
            sx={{
              fontSize: ["1.8em", "2.5em"],
              color: "#104478",
              fontWeight: 900,
              mb: 1,
              fontFamily: "'Montserrat',sans- serif",
            }}
          >
            About React Project
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: ["1.2em", "1.5em"],
              color: "#838383",
              mb: 1,
            }}
          >
            React js is most demanded front end library based javascript. It
            works on resusable components. It also help to make responsive app
            with ingegrating other front end libraries like Mui, Bootstrap etc..
            Here, some practice app and demo apps are available to showcase of
            mine work.
          </Typography>
          <Box component="div" sx={{ display: "flex", gap: 1 }}>
            <button
              type="button"
              className="btn bt-outline btn-md"
              style={{
                marginBottom: "10px",
                backgroundColor: "#104478",
                color: "white",
              }}
              onClick={() => navigate("/Projects")}
            >
              Visit Projects
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
