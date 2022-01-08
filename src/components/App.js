import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="mainpage">
        <div className="left-bar">
        
        <a className="button">Last Page</a>
        </div>
        <div className="component">
          <BrowserRouter>
            <Routes>
              <Route></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <div className="right-bar">
        <a className="button">Next Page</a>
        </div>
      </div>
    </div>
  );
}

export default App;
