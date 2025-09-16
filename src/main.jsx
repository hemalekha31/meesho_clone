import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { Store } from "./store/Store.js";

// Handle GitHub Pages redirect (?p=...)
const redirectPath = window.location.search.startsWith("?p=")
  ? window.location.search.replace("?p=", "").split("&")[0] // keep only path
  : null;

if (redirectPath) {
  window.history.replaceState(null, "", redirectPath);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter basename="/meesho_clone">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
