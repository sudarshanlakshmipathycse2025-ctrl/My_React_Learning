import { createRoot } from "react-dom/client";
import reactLogo from "./assets/react-logo.png";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <main>
        <img
            src={reactLogo}
            alt="React Logo"
            className="react-logo"
        />

        <h1>This is another element</h1>

        <p>Welcome to my React application!</p>
    </main>
);