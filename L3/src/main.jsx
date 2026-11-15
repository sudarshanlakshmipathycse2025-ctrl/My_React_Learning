import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));

const reactElement = createElement(
  "h1",
  null,
  "Hello from createElement!"
);

console.log(reactElement);

root.render(reactElement);