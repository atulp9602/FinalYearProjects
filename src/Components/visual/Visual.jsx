import { Box, Card, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import SelectComp from "./SelectComp";
import CovidCard from "./CovidCard";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CChart } from "@coreui/react-chartjs";

const Visual = () => {
  const url = "https://data.covid19india.org/data.json";
  const [covidData, setCovidData] = useState([]);
  const [stateName, setStateName] = useState("Gujarat");

  const handleStateChange = (name) => {
    setStateName(name);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(url);
        const data = await res.data;
        console.log(data);
        setCovidData(data.statewise);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  let res, pieLables, bar_labels, bar_data, bar_label_data;
  if (covidData.length > 0) {
    res = covidData.filter((obj) => obj?.state === stateName)[0];

    pieLables = Object.entries(res).filter(
      (val, ind) =>
        val[0] === "active" || val[0] === "deaths" || val[0] === "recovered"
    );

    bar_label_data = covidData.reduce((acc, obj, indx) => {
      acc.push({ state: obj.state, cases: obj.active });
      return acc;
    }, []);
  }

  console.log(bar_label_data);

  const displayCovidData = () => {
    return Object.entries(res).map((val, ind) => (
      <Typography key={ind} variant="subtitle1">
        {val[0]} : {val[1]}
      </Typography>
    ));
  };

  const displayCovidInfoCards = () => {
    return Object.entries(res).map((val, ind) => {
      if (
        val[0] === "active" ||
        val[0] === "deaths" ||
        val[0] === "confirmed" ||
        val[0] === "recovered"
      ) {
        return <CovidCard key={ind} title={val[0]} count={val[1]} />;
      }
    });
  };

  if (covidData.length > 0) {
    console.log(bar_labels);
  }

  return (
    <Box
      component="div"
      sx={{
        flex: 1,
        p: 1,
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        gap: [1, 2],
      }}
    >
      {/* searchbar component */}
      <Box sx={{ flex: 0 }}>
        <SelectComp
          covidData={covidData}
          handleStateChange={handleStateChange}
          stateName={stateName}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          //   flexWrap: "wrap",
          flexDirection: ["column", "column", "row"],
          gap: 1,
          height: "auto",
        }}
      >
        <Box
          component="div"
          sx={{
            flex: 1,
            display: "flex",
            height: "auto",
            maxWidth: ["100%", "100%", "350px"],
            flexDirection: "column",
            gap: 2,
            p: 2,
            backgroundColor: "#d2eaff",
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 0.3,
              height: "auto",
              width: "100%",
              alignItems: ["center", "flex-start"],
            }}
          >
            {covidData.length > 0 && displayCovidData()}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              backgroundColor: "white",
              maxWidth: "300px",
              width: "100%",
              p: 2,
            }}
          >
            <CChart
              type="doughnut"
              borderAlign="center"
              data={{
                labels: pieLables
                  ? [pieLables[0][0], pieLables[1][0], pieLables[2][0]]
                  : null,
                datasets: [
                  {
                    data: pieLables
                      ? [pieLables[0][1], pieLables[1][1], pieLables[2][1]]
                      : null,
                    backgroundColor: [
                      "#FF6384",
                      "#4BC0C0",
                      "#FFCE56",
                      "#E7E9ED",
                      "#36A2EB",
                    ],
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "bottom",
                  },
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 2,
            backgroundColor: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              width: "100%",
              flex: 1,
              flexWrap: "wrap",

              padding: 1,
              alignItems: "center",
              justifyContent: "space-around",
              gap: 2,
            }}
          >
            {covidData.length > 0 && displayCovidInfoCards()}
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              flex: 3,
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                backgroundColor: "white",
                p: 2,
              }}
            >
              <ResponsiveContainer aspect={2.5} width="100%" height="100%">
                <BarChart
                  width={400}
                  height={300}
                  data={bar_label_data ? bar_label_data : []}
                  barSize={20}
                >
                  <XAxis
                    dataKey="state"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="cases"
                    fill="#8884d8"
                    background={{ fill: "#eee" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Visual;
