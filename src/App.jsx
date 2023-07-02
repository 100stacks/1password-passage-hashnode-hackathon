import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
// eslint-disable-next-line import/no-unresolved
import viteLogo from "/vite.svg";
import passageLogo from "./assets/passage.svg";

import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href=" https://passage.id" target="_blank" rel="noreferrer">
          <img src={passageLogo} className="logo react" alt="Passage" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Passage + Vite + React</h1>
      <div className="card">
        <BrowserRouter>
          <Banner />
          <div className="mainContainer">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
