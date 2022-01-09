import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Day0 from "./Day0/Day0";

function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    document.title = `You're on Day ${page}/50 `;
  });

  return (
    <div>
      <div className="mainpage">
        <div className="left-bar">
          <button className="button " onClick={() => setPage(page - 1)}>
            Last Page
          </button>
        </div>
        <div className="component">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Day0 page={page} setPage={setPage} />}
              />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="right-bar">
          <button className="button" onClick={() => setPage(page + 1)}>
            Day {1 + page}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
