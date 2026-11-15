import { createRoot } from "react-dom/client";
import "./index.css";
import reactLogo from "./assets/react-logo.png";

const root = createRoot(document.getElementById("root"));

root.render(
    <main>
        <img src={reactLogo} alt="React Logo" />

        <h1>Fun Facts about React</h1>

        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on Github</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
);