import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const MainContent = () => {
//   return <h1>React is Great!</h1>;
// };

let h1Element = document.createElement("h1");
h1Element.textContent = "Hello React!";
h1Element.className = "header";
const rootElement = document.getElementById("root");
rootElement.appendChild(h1Element);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//     {/* <MainContent /> */}
//   </StrictMode>
// );
