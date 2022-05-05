import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [text, setText] = useState("Welcome!");

  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setText(""), 2000);
  })

  return (
  <React.Fragment>
    <button>Click Me</button>
    <input placeholder="Write your own website title" onChange={(event) => setText(event.target.value)}></input>
    <DogPics />
  </React.Fragment>
  );
}

export default App;
