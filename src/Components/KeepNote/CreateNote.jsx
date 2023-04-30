import React, { useEffect, useState } from "react";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import { CompareSharp } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

const CreateNote = ({ addNote, status, noteA, updateNoteIndex }) => {
  const [note, setNote] = useState({
    title: "",
    subtitle: "",
    isPinned: false,
  });

  useEffect(() => {
    if (status) {
      setNote((prevData) => {
        return {
          ...prevData,
          title: noteA.title,
          subtitle: noteA.subtitle,
        };
      });
    } else {
      setNote((prevData) => {
        return {
          ...prevData,
          title: "",
          subtitle: "",
        };
      });
    }
  }, [status]);

  function handleInput(event) {
    const { name, value } = event.target; //target is object and contains name and value
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        mb: [1, 2],
      }}
      variant="outlined"
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          boxShadow: "0px 0px 25px gray",
          padding: "20px",
          width: "100%",
          maxWidth: "450px",
          borderRadius: "8px",
        }}
      >
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="✍️ Title"
          style={{
            width: "100%",
            fontSize: ["16px", "20px"],
            padding: "5px",
            outline: "none",
            border: "1px solid #F5D260",
          }}
          onChange={handleInput}
        />
        <br />
        <textarea
          rows="3"
          name="subtitle"
          value={note.subtitle}
          cols="25"
          onChange={handleInput}
          style={{
            width: "100%",
            outline: "none",
            border: "1px solid #F5D260",
            fontSize: ["14px", "16px"],
            padding: "5px",
          }}
          placeholder="Enter your notes here..."
        ></textarea>
        <br />

        <Button
          variant="contained"
          size="small"
          sx={{ color: "secondary.light" }}
          onClick={(event) => {
            event.preventDefault();
            console.log(status);
            if (note.title && note.subtitle) {
              if (status) {
                addNote(note, updateNoteIndex);
              } else {
                addNote(note, -1);
              }
            }
            setNote((prev) => {
              return {
                ...prev,
                title: "",
                subtitle: "",
              };
            });
          }}
        >
          {status ? <EditIcon /> : <AddIcon />}
          {status ? "Update" : "Add"}
        </Button>
      </form>
    </Box>
  );
};

export default CreateNote;
