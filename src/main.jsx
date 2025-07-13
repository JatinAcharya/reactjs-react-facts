import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// // const MainContent = () => {
// //   return <h1>React is Great!</h1>;
// // };

// // const h1Element = document.createElement("h1");
// // h1Element.textContent = "Hello React!";
// // h1Element.className = "header";
// // const rootElement = document.getElementById("root");
// // rootElement.appendChild(h1Element);

const PageComponent = () => {
  return (
    <ol>
      <li>Reason 1</li>
      <li>Reason 2</li>
      <li>Reason 3</li>
      <li>Reason 4</li>
    </ol>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MainContent /> */}
    <PageComponent />
  </StrictMode>
);
