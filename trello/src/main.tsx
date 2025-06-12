import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";
import App from "./App.tsx";
import theme from "./theme";
import "./i18n/i18n.ts"; 


//libreria arriba
//de la aplicacion luego

//Ya no auth provider porque estamos con zustand

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />

    </ThemeProvider>
  </StrictMode>
);