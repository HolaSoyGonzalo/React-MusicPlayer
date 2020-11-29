import React, { useState } from "react";
//Styles
import "./styles/app.scss";
//Components
import Player from "./Components/Player";
import Song from "./Components/Song";
//Songs Data
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());

  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
