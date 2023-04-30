import { Box, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import fetchData from "../DesignDemos/fetchData";

const WeatherCard = () => {
  const [cityName, setCityName] = useState("surat");
  const [tempData, setTempData] = useState({
    temp: "",
    max_temp: "",
    min_temp: "",
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3237646928a1e8a96de2efd3b76a6698`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      const data = await res.data;
      console.log(res.data);
      setTempData({
        temp: data.main.temp,
        max_temp: data.main.temp_max,
        min_temp: data.main.temp_min,
      });
    };

    fetchData();
  }, [cityName]);

  return (
    <Box
      component="div"
      sx={{
        flex: 1,
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        sx={{
          flex: 0,
          fontSize: ["1.5rem", "1.8rem", "2rem"],
          m: 2,
          textTransform: "uppercase",
        }}
      >
        Check Weather!!
      </Typography>

      <Card
        elevation="5"
        sx={{
          flex: 1,
          marginY: "auto",
          maxHeight: "400px",
          maxWidth: "350px",
          width: "100%",
          padding: "10px",
          backgroundColor: "#196EB2 ",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Enter your city here..."
          type="text"
          style={{
            margin: "10px 8px",
            padding: "8px 10px",
            backgroundColor: "white",
            border: 0,
            outline: "none",
            borderRadius: "18px",
            fontSize: "1rem",
            "&:focus": {
              background: "#A6D5FB",
              outline: "white",
            },
          }}
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <img
          className="weather_img"
          src={require("../../assets/images/weather.webp")}
          style={{
            maxHeight: "200px",
            maxWidth: "200px",
            width: "100%",
            height: "100%",
          }}
        />
        {cityName && tempData && (
          <>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                fontSize: ["1.5rem", "1.5rem", "2rem"],
                color: "#FFFFFF",
              }}
            >
              {tempData.temp}&#8451;
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: ["1rem", "1rem", "1.2rem"],
                color: "#FFFFFF",
              }}
            >
              max: {tempData.max_temp} & min: {tempData.min_temp}
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                textTransform: "capitalize",
                color: "#FFFFFF",
                fontSize: ["1.5rem", "1.5rem", "1.8rem"],
              }}
            >
              {cityName}
            </Typography>
          </>
        )}
      </Card>
    </Box>
  );
};

export default WeatherCard;
