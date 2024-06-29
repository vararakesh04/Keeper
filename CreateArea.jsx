import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

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
      <form>
        <input
          name="title"
          onChange={handler}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handler}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={noteAdder}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
