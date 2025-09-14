import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Provider from "./components/ui/Provider";
import { Theme } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Theme appearance="dark" colorPalette="teal">
        <App />
      </Theme>
    </Provider>
  </StrictMode>
);
