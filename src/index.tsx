// import modules/packages
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import component
import App from "./components/App";

// get app entrance
const root = createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);