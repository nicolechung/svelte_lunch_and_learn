import * as React from "react";
import { render } from "react-dom";
import { SvelteComponent } from "./SvelteComponent";
import SvelteThing from "./SvelteThing.html";

function App({ component, count }) {
  return (
    <div>
      <p>This is a Svelte component inside a React app:</p>
      <SvelteComponent component={component} count={count} />
    </div>
  );
}

const main = document.querySelector("main");
let i = 0;

function update() {
  render(<App component={SvelteThing} count={i++} />, main);
  setTimeout(update, 1000);
}

update();
