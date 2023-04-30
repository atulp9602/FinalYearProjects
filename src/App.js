import "./App.css";
import "./style/HookStyle.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Routers from "./Components/Routes";
import NavbarComp from "./Components/NavbarComp";
import Inc_Dec from "./Components/DesignDemos/IncDec";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Router>
        <NavbarComp />
        <Routers />
      </Router>
    </div>
  );
}

export default App;
