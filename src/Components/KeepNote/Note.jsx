import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import {
  EditOutlined as EditOutlinedIcon,
  Edit as EditIcon,
  PushPin as PushPinIcon,
  PushPinOutlined as PushPinOutlinedIcon,
} from "@mui/icons-material";
import { useState } from "react";

const Note = ({
  note,
  index,
  handleUpdate,
  handleDelete,
  handlePinUnpinNote,
}) => {
  const [updateStatus, setUpdateStatus] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        alignItems: "center",
        boxShadow: 4,
        borderRadius: "5px",
        width: "100%",
        maxWidth: "300px",
        minHeight: "120px",
        position: "relative",
        marginBottom: "1rem",
      }}
    >
      <IconButton
        aria-label="pin"
        size="small"
        color="primary"
        sx={{
          position: "absolute",
          top: "-12px",
          right: "-12px",
          zIndex: 1,
        }}
        onClick={() => {
          handlePinUnpinNote(note);
        }}
      >
        {note.isPinned ? (
          <Tooltip title="Unpin">
            <IconButton sx={{ color: "primary.main" }}>
              <PushPinIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Pin">
            <IconButton sx={{ color: "primary.main" }}>
              <PushPinOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </IconButton>
      <Typography
        variant="subtitle1"
        color="secondary.dark"
        sx={{
          fontSize: ["1.2em", "1.6em", "2em"],
          fontWeight: 700,
          mb: "0.5rem",
          width: "100%",
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {note.title}
      </Typography>
      <Typography
        variant="body1"
        color="secondary.main"
        sx={{
          fontSize: ["0.8em", "1em", "1.2em"],
          fontWeight: 500,
          mb: "1rem",
          textAlign: "center",
          wordBreak: "break-all",
          lineHeight: 1.5,
          maxHeight: "5.5em",
        }}
      >
        {note.subtitle}
      </Typography>
      <Button
        color="error"
        variant="contained"
        size="small"
        onClick={() => handleDelete(index)}
        sx={{
          alignSelf: "flex-end",
          mr: "0.5rem",
        }}
      >
        Delete
      </Button>
      <IconButton
        size="small"
        disableFocusRipple={false}
        sx={{
          m: 0.5,
          color: "black",
          alignSelf: "flex-end",
        }}
        onClick={() => {
          handleUpdate(index, !updateStatus);
          setUpdateStatus(!updateStatus);
        }}
      >
        {updateStatus ? (
          <EditIcon fontSize="small" />
        ) : (
          <Tooltip title="Edit">
            <EditOutlinedIcon fontSize="small" />
          </Tooltip>
        )}
      </IconButton>
    </Box>
  );
};

export default Note;
