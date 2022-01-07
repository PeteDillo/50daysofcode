import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="header">
        <a className="button">Last Page</a>
        <a className="button">Current Page</a>
        <a className="button">Next Page</a>
      </div>
      <div className="sidebar">
      <h1 className="sidebutton">
          <span>
          Profile
          </span>
        </h1>
        <h1 className="sidebutton">
          <span>
          Profile
          </span>
        </h1>
        <h1 className="sidebutton">
          <span>
          Profile
          </span>
        </h1>
      </div>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
