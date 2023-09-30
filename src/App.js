import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(1);
  return (
    <>
      <p>{value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          value >= 2 && setValue(value - 1);
        }}
      >
        -1
      </button>
      <div
        style={{
          width: value === 0 ? 20 : 20 * value,
          height: value === 0 ? 20 : 20 * value,
          backgroundColor: "black",
        }}
      ></div>
    </>
  );
}

export default App;
