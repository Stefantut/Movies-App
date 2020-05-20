import React from "react";
import "./App.css";
import DisplayMovies from "./components/DisplayMovies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Movies App</h2>
      </header>
      <DisplayMovies />
    </div>
  );
}

export default App;
