import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isbol, setbol] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function expand() {
    setbol(true);
  }

  function handler(e) {
    const { name, value } = e.target;
    setNote((prevnote) => {
      return {
        ...prevnote,
        [name]: value,
      };
    });
  }

  function noteAdder(event) {
    props.onadd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className="create-note">
        {isbol ? (
          <input
            name="title"
            value={note.title}
            onChange={handler}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handler}
          value={note.content}
          placeholder="Take a note..."
          rows={isbol ? 3 : 1}
        />
        <Zoom in={isbol}>
          <Fab onClick={noteAdder}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
