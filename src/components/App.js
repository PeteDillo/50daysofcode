import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Day0 from "./Day0/Day0";
import ComingSoon from "./ComingSoon/ComingSoon";

function App() {
  const [page, setPage] = useState(0);
  let pageCounter = 1;

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
                path="/day0"
                element={<Day0 page={page} setPage={setPage} />}
              />
              <Route
                path="/ComingSoon"
                element={<ComingSoon page={page} setPage={setPage} />}
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
