import { Avatar } from "@mui/material";
import React, { useState } from "react";

const AvtarComp = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
  }
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <Avatar
      className="mb-3 mx-auto col-md-6 shadow-sm"
      src={preview}
      alt=""
      sx={{ width: 140, height: 140 }}
    />
  );
};

export default AvtarComp;
