import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleNotes(newnote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newnote];
    });
  }

  function deletion(id) {
    setNotes((prevNotes) => {
      return notes.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={handleNotes} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteItem={deletion}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
