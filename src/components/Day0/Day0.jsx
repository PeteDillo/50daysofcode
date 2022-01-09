import React, { useState, useEffect } from "react";
import "./day0.scss";

const Day0 = (page) => {
  return (
    <div className="Main">
      <div className="counter-container">
        <h1 className="counter">{page.page}</h1>
      </div>
    </div>
  );
};

export default Day0;
