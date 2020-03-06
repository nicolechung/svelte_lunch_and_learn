import React, { useState } from "react";
import { render } from "react-dom";
import { SvelteComponent } from "./SvelteComponent";
import SvelteThing from "./SvelteThing.svelte";

function App({ component }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{ backgroundColor: "#ffd5e5", padding: "20px", height: "100vh" }}
    >
      <h1>This is the react app:</h1>
      <button
        onClick={increment}
        style={{
          borderRadius: "5px",
          padding: "10px",
          fontSize: "20px",
          marginRight: "20px",
          border: "none",
          backgroundColor: "#ffffdd"
        }}
      >
        +
      </button>
      <button
        onClick={decrement}
        style={{
          borderRadius: "5px",
          padding: "10px",
          fontSize: "20px",
          border: "none",
          backgroundColor: "#ffffdd"
        }}
      >
        -
      </button>
      <SvelteComponent component={component} count={count} onClick={reset} />
    </div>
  );
}

const main = document.querySelector("main");

function update() {
  render(<App component={SvelteThing} />, main);
}

update();
