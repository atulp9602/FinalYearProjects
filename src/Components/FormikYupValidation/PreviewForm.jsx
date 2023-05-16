import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { Profiler } from "react";
import { useLocation } from "react-router";
import AvtarComp from "../AvtarComp";

const PreviewForm = () => {
  const { state } = useLocation();
  const { profileData, imgData } = state;
  console.log("image src", imgData);

  return (
    <Box sx={{ flex: 0 }}>
      <Box sx={{ flex: 0, p: 2 }}>
        <Typography variant="h4" textAlign="center">
          Profile
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justify: "center",
          alignItems: "center",
        }}
      >
        <Card
          className="shadow"
          sx={{
            p: 3,
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <AvtarComp file={imgData} />
          <Typography variant="h6">Name : {profileData.name}</Typography>
          <Typography variant="h6">Age : {profileData.age}</Typography>
          <Typography variant="h6">
            Pancard Number : {profileData.panNumber || "NAN"}
          </Typography>
          <Typography variant="h6">
            Votingcard Number : {profileData.voteNumber || "NAN"}
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default PreviewForm;
