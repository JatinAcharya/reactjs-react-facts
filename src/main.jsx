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
    <div>
      <header>
        <img src="/src/assets/react.svg" alt="React Logo" />
      </header>
      <main>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>Reason 1</li>
          <li>Reason 2</li>
          <li>Reason 3</li>
          <li>Reason 4</li>
        </ol>
      </main>
      <footer>© 2025 Acharya development. All rights reserved.</footer>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MainContent /> */}
    <PageComponent />
  </StrictMode>
);
