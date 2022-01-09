import React, { useState, useEffect } from "react";
import "./day0.scss";

const Day0 = (page) => {
  return (
    <div className="Main">
      <div className="counter-container">
        <a className="counter">{page.page}</a>
      </div>
    </div>
  );
};

export default Day0;
