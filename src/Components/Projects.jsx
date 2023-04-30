import React from "react";
import { ProjectsData } from "../utils/Data";

import CardsContainer from "./CardsContainer";

const Projects = () => {
  return (
    <div style={{ flex: 1 }}>
      <CardsContainer data={ProjectsData} heading="Projects" />
    </div>
  );
};

export default Projects;
