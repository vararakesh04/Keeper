import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);

  function addNote(note) {
    setArr((prevnote) => {
      return [...prevnote, note];
    });
  }

  function arrdelter(id) {
    setArr((prevnote) => {
      return prevnote.filter((x, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onadd={addNote} />
      {arr.map((nodeitems, index) => {
        return (
          <Note
            id={index}
            title={nodeitems.title}
            content={nodeitems.content}
            ondelete={arrdelter}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
