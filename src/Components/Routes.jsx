import React from "react";
import { Route, Router, Routes } from "react-router";
import { Typography } from "@mui/material";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Practice from "./Practice";
import Projects from "./Projects";
import Form from "./Hooks/Form";
import Clock from "./Hooks/Clock";
import Todo from "./Hooks/Todo";
import Timer from "./Hooks/Timer";
import Counter from "./Hooks/Counter";
import KeepNote from "./KeepNote/KeepNote";
import ObjectState from "./Hooks/ObjectState";
import ShowCovidData from "./DesignDemos/ShowCovidData";
import Inc_Dec from "./DesignDemos/IncDec";
import ImageSearch from "./DesignDemos/ImageSearch";
import WeatherCard from "./weatherapp/WeatherCard";
import Visual from "./visual/Visual";
import StudentTask from "./FormikYupValidation/StudentTask";
import StudentDetail from "./FormikYupValidation/StudentDetail";
import YupValidation from "./FormikYupValidation/YupValidation";
import PreviewForm from "./FormikYupValidation/PreviewForm";
const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/About" Component={About} />
      <Route path="/Practice" Component={Practice} />
      <Route path="/Practice/Clock" Component={Clock} />
      <Route path="/Practice/Counter" Component={Counter} />
      <Route path="/Practice/Form" Component={Form} />
      <Route path="/Practice/ObjectState" Component={ObjectState} />
      <Route path="/Practice/Timer" Component={Timer} />
      <Route path="/Practice/Todo" Component={Todo} />
      <Route path="/Projects" Component={Projects} />
      <Route path="/Projects/KeepNote" Component={KeepNote} />
      <Route path="/Projects/ShowCovid" Component={ShowCovidData} />
      <Route path="/Projects/IncDec" Component={Inc_Dec} />
      <Route path="/Projects/ImageSearch" Component={ImageSearch} />
      <Route path="/Projects/WeatherCard" Component={WeatherCard} />
      <Route path="/Projects/Visual" Component={Visual} />
      <Route path="/Projects/StudentTask" Component={StudentTask} />
      <Route path="/Projects/StudentDetail" Component={StudentDetail} />
      <Route path="/Projects/YupValidation" Component={YupValidation} />
      <Route path="/Projects/PreviewForm" Component={PreviewForm} />
      <Route path="/Contact" Component={Contact} />
      <Route
        path="/*"
        element={
          <Typography sx={{ textAlign: "center" }}>404 NOT FOUND!!</Typography>
        }
      />
    </Routes>
  );
};

export default Routers;
