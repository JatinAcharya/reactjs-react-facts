import React from "react";
import "./App.css";

const App = () => {
  console.log(<h1>Hello world</h1>);
  return (
    <main>
      <div className="heading">
        <img src="/src/assets/react.svg" alt="React-Logo" />
        <h2>React Facts</h2>
      </div>
      <div className="main-content">
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created bt Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is mainted by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
};

export default App;
