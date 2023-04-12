import React from "react";
import "./App.css";

function App() {
  return (
    <main className="App">
      <h1>React useState</h1>
      <section>
        <h2 className="count"></h2>
        <button className="countButton">+1</button>
      </section>
      <section>
        <p className="randomBootcamper">BOOTCAMPER NAME</p>
        <button className="randomBootcamperName">
          Click me for a random bootcamper!
        </button>
      </section>
    </main>
  );
}

export default App;
