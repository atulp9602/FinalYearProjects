import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageComp from "./ImageComp";
import HourglassDisabledIcon from "@mui/icons-material/HourglassDisabled";

const ImageSearch = () => {
  const [imgTerm, setImgTerm] = useState("");

  return (
    <Box
      component="div"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          flex: 0,
        }}
      >
        Search Random Image
      </Typography>
      <Box
        sx={{
          flex: 1,
          my: "auto",
          maxWidth: "520px",
          borderRadius: 4,
          boxShadow: 4,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: 1,
          maxHeight: "440px",
          height: "100%",
        }}
      >
        <input
          type="search"
          placeholder="Search Image"
          style={{
            outline: "none",
            borderRadius: "4px",
            padding: "5px 10px",
            fontSize: ["16px", "18px"],
            width: "100%",
          }}
          value={imgTerm}
          onChange={(e) => setImgTerm(e.target.value)}
        />

        {imgTerm ? (
          <ImageComp imgTerm={imgTerm} />
        ) : (
          <HourglassDisabledIcon fontSize="large" sx={{ marginX: "auto" }} />
        )}
      </Box>
    </Box>
  );
};

export default ImageSearch;
