import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [start, setStart] = useState(false);

  function addNotes(event) {
    props.addNote(note);
    setNote({ title: "", content: "" });
    setStart(false);
    event.preventDefault();
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function animation() {
    setStart((preValue) => {
      return true;
    });
  }
  return (
    <div>
      <form className="create-note">
        {start && (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          onClick={animation}
          placeholder="Take a note..."
          rows={start ? "3" : "1"}
        />

        <Zoom in={start}>
          <Fab onClick={addNotes}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
