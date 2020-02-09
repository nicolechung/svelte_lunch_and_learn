import React, { useState } from "react";
import { render } from "react-dom";
import { SvelteComponent } from "./SvelteComponent";
import SvelteThing from "./SvelteThing.svelte";

function App({ component }) {
  const [count, setCount] = useState(0)
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div>
      <p>This is a Svelte component inside a React app:</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <SvelteComponent component={component} count={count} onClick={reset} />
    </div>
  );
}

const main = document.querySelector("main");


function update() {
  render(<App component={SvelteThing} />, main);
}

update();
