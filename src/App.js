import {useState} from "react";
import {bootcampers} from "../src/bootcampers.js";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  const [bootcamperIndex, setBootcamperIndex] = useState(Math.floor(Math.random() * bootcampers.length));

  function handleCounterClick() {
    setCount(count + 1);
  }

  function handleBootcamperClick() {
    const randomIndex = Math.floor(Math.random() * bootcampers.length);
    setBootcamperIndex(randomIndex);
    console.log(setBootcamperIndex);
  }
// Fix display to name instead of index number
  

  return (
    <main className="App">
      <h1>React useState</h1>
      <section>
        <h2 className="count">{count}</h2>
        <button className="countButton" onClick={handleCounterClick}>+1</button>
      </section>
      <section>
        <p className="randomBootcamper">{bootcampers[bootcamperIndex]}</p>
        <button className="randomBootcamperName" onClick={handleBootcamperClick}>
          Click me for a random bootcamper!
        </button>
      </section>
    </main>
  );
}

export default App;