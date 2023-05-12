import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { Profiler } from "react";
import { useLocation } from "react-router";
import AvtarComp from "../AvtarComp";

const PreviewForm = () => {
  const { state } = useLocation();
  const { profileData, imgData } = state;

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ flex: 0, p: 2 }}>
        <Typography variant="h4" textAlign="center">
          Profile
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          className="shadow"
          sx={{
            p: 3,
            height: 450,
            width: 350,
          }}
        >
          <AvtarComp file={imgData} />
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h6">Name : {profileData.name}</Typography>
            <Typography variant="h6">Age : {profileData.age}</Typography>
            <Typography variant="h6">
              Pancard Number : {profileData.panNumber || "NAN"}
            </Typography>
            <Typography variant="h6">
              Votingcard Number : {profileData.voteNumber || "NAN"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default PreviewForm;
