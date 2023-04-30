import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ title, desc, img_path, src_path }) => {
  const navigate = useNavigate();

  return (
    <div className="card h-100 shadow-lg my-component">
      <img
        src={require(`../assets/images/${img_path}`)}
        className="card-img-top"
        alt={title}
        style={{
          objectFit: "fill",
          height: "330px",
          width: "100%",
        }}
      />
      <div
        className="card-body text-bg-light d-flex flex-column justify-content-between"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <button
          onClick={() => {
            navigate(src_path);
          }}
          className="btn btn-outline-primary  w-100"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
