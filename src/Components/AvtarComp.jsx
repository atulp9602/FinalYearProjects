import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";

const AvtarComp = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();

  if (file) {
    reader.readAsDataURL(file);
    console.log(file);
  }
  reader.onload = () => {
    if (reader.readyState === 2) {
      setPreview(reader.result);
    }
  };

  return (
    <Avatar
      className="mb-3 mx-auto col-md-8 shadow-sm"
      src={file ? preview : ""}
      alt=""
      sx={{ width: 125, height: 125 }}
    />
  );
};

export default AvtarComp;
