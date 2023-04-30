import React from "react";
import Card from "./Card";
import { Box } from "@mui/material";

const CardsContainer = (props) => {
  return (
    <div className="p-4 shadow-md">
      <h2
        className="text-uppercase text-center fw-bold mb-4"
        style={{ color: "#333" }}
      >
        {props.heading}
      </h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2 g-4">
        {props.data.map((obj, ind, arr) => (
          <div key={ind} className="col">
            <Card
              title={obj.title}
              desc={obj.desc}
              img_path={obj.img_path}
              src_path={obj.src_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
