import React, { createContext, useEffect, useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Alert, Box, Divider, Snackbar } from "@mui/material";
import ToastComp from "./ToastComp";
import DialogueComp from "./DialogueComp";
import SearchBarComp from "./SearchBarComp";

function KeepNote() {
  const [noteArray, setNoteArray] = useState([]);
  const [addToast, setAddToast] = useState(false);
  const [deleteToast, setDeleteToast] = useState(false);
  const [updateToast, setUpdateToast] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [flagStatus, setFlagStatus] = useState(false);
  const [updateNoteIdStatus, setUpdateNoteIdStatus] = useState({
    index: -1,
    status: false,
  });
  const [search, setSearch] = useState("");

  //add note
  function addNote(note, index) {
    if (index > -1) {
      console.log("now updating");
      setNoteArray((prevNotes) =>
        prevNotes.map((noteS, ind) => {
          if (index === ind) {
            return note;
          } else {
            return noteS;
          }
        })
      );
      setUpdateToast(true);
      setUpdateNoteIdStatus({
        index: -1,
        status: false,
      });
    } else {
      console.log("now adding");
      let id = Date.now();
      let newNote = { ...note, id };
      setNoteArray((prevNotes) => [...prevNotes, newNote]);
      setAddToast(true);
    }
  }

  //handle delete note
  function handleDelete(index) {
    // setShowDialogue(true);
    // flagStatus &&
    setNoteArray((prevNotes) => {
      return prevNotes.filter((note, ind) => {
        return index !== ind;
      });
    });
    setDeleteToast(true);
  }

  //handle edit note
  function handleUpdate(index, status) {
    setUpdateNoteIdStatus({
      index: index,
      status: status,
    });
  }

  //handle pin/unpin note
  function handlePinUnpinNote(selectedNote) {
    let insertToIndex = 0;

    const updatedNote = { ...selectedNote, isPinned: !selectedNote.isPinned };

    let tempPinnedNotes = [...noteArray.filter((note) => note.isPinned)];
    const pinnedNotes = tempPinnedNotes.filter((note) => note !== selectedNote);

    const unPinnedNotes = noteArray.filter(
      (note) => note !== selectedNote && !note.isPinned
    );

    console.log(pinnedNotes, unPinnedNotes);
    if (updatedNote.isPinned) {
      //pinning functionality
      insertToIndex =
        pinnedNotes.length > 0
          ? noteArray.indexOf(pinnedNotes[pinnedNotes.length - 1]) + 1
          : 0;
    } else {
      //unpinning functionality
      insertToIndex =
        noteArray.indexOf(unPinnedNotes[unPinnedNotes.length - 1]) + 1;
    }

    const newNoteArray = [...pinnedNotes, ...unPinnedNotes];
    newNoteArray.splice(insertToIndex, 0, updatedNote);

    setNoteArray(newNoteArray);
  }

  //handle close toast
  function closeToastHanlder(status) {
    setAddToast(status);
    setDeleteToast(status);
    setUpdateToast(status);
  }

  //handle close dialogue
  function closeDialogueHanlder(status) {
    setShowDialogue(status);
  }

  //hanlde flag
  function setFlag(status) {
    setFlagStatus(status);
  }

  //handle Search input
  function handleSearch(input) {
    // console.log(input);
    setSearch(input);
  }

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {/* <Header /> */}
        {addToast && (
          <ToastComp
            closeToastHanlder={closeToastHanlder}
            severity="success"
            vertical="top"
            horizontal="right"
            text="Note added successfully!"
          />
        )}
        {updateToast && (
          <ToastComp
            closeToastHanlder={closeToastHanlder}
            vertical="top"
            horizontal="right"
            severity="success"
            text="Note Updated successfully!"
          />
        )}
        {deleteToast && (
          <ToastComp
            closeToastHanlder={closeToastHanlder}
            vertical="top"
            horizontal="right"
            severity="error"
            text="Note Deleted successfully!"
          />
        )}
        {/* {showDialogue && <DialogueComp closeDialogueHanlder={closeDialogueHanlder} setFlag={setFlag} />} */}
        <CreateNote
          addNote={addNote}
          status={updateNoteIdStatus.status}
          noteA={noteArray[updateNoteIdStatus.index]}
          updateNoteIndex={updateNoteIdStatus.index}
        />
        <Divider sx={{ height: "2px", color: "primary.main" }} />
        <SearchBarComp handleSearch={handleSearch} />

        <Box
          sx={{
            flex: 1,
            display: "flex",
            gap: [1, 2],
            flexDirection: ["column", "row"],
            flexWrap: "wrap",
            alignItems: ["center", "flex-start"],
            justifyContent: "flex-start",
            p: 2,
          }}
        >
          {search
            ? noteArray
                .filter((note) =>
                  note.title.toUpperCase().startsWith(search.toUpperCase())
                )
                .map((note, index) => (
                  <Note
                    key={index}
                    index={index}
                    note={note}
                    handleDelete={handleDelete}
                    handlePinUnpinNote={handlePinUnpinNote}
                    handleUpdate={handleUpdate}
                  />
                ))
            : noteArray.map((note, index) => (
                <Note
                  key={index}
                  index={index}
                  note={note}
                  handleDelete={handleDelete}
                  handlePinUnpinNote={handlePinUnpinNote}
                  handleUpdate={handleUpdate}
                />
              ))}
        </Box>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}
export default KeepNote;
