import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RadExHeader } from "./header/header";
import { MainRadEx } from "./header/MainRadEx/main-rad-ex";

function App() {
  return (
    <div className="App">
      <RadExHeader />
      <MainRadEx />
    </div>
  );
}

export default App;
