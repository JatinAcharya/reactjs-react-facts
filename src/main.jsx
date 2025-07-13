import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const MainContent = () => {
  return <h1>React is Great!</h1>;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <MainContent />
  </StrictMode>
);
