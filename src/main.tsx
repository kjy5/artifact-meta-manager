import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

// Use dark theme.
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
