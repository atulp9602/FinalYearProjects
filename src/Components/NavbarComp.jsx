import React from "react";
import { Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary px-3"
      style={{
        backgroundColor: "#CBE8FF",
        boxShadow: "0px 4px 18px gray",
        flex: 0,
      }}
    >
      <Box component="div" className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src={require("../assets/images/react_logo.png")}
            alt="logo"
            height="40rem"
            width="40rem"
            style={{
              marginRight: "5px",
            }}
          />
          React JS
        </NavLink>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink
                to="/"
                className="nav-link active"
                aria-current="page"
                style={{ color: "black" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Practice">
                Practice
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Projects">
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </Box>
    </nav>
  );
};

export default NavbarComp;
