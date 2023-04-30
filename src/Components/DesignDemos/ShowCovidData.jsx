import React, { useEffect, useState } from "react";
import TableComp from "./TableComp";
import fetchData from "./fetchData";
import PaginationComp from "./PaginationComp";
import { Box, Typography } from "@mui/material";

const ShowCovidData = () => {
  const [covidData, setCovidData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(true);

  let noOfDataPerPage = 10;

  useEffect(() => {
    fetchData().then((data) => {
      setCovidData(data.statewise);
      setLoading(false);
    });
  }, [pageNo]);

  function displayData(pageNo) {
    setPageNo(pageNo);
  }

  console.log(covidData);
  return (
    <Box
      component="div"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
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
        Covid Data
      </Typography>
      <Box
        component="div"
        sx={{
          marginY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxWidth: 750,
          height: ["100%", "70vh"],
          width: "100%",
          alignItems: "center",
        }}
      >
        {covidData && (
          <>
            <TableComp
              covidData={covidData}
              noOfDataPerPage={noOfDataPerPage}
              selectedPage={pageNo}
            />
            <PaginationComp
              dataLength={covidData.length}
              noOfDataPerPage={noOfDataPerPage}
              displayData={displayData}
              page={pageNo}
            />
          </>
        )}
        {loading && <Typography textAlign="center">Loading...</Typography>}
      </Box>
    </Box>
  );
};

export default ShowCovidData;
