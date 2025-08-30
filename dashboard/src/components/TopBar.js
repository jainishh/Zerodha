import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topcontainer">
      <div className="insidecontainer">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="indexPoint">24008.00</p>
          <p className="percentage">-265.80 (-1.10%)</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="indexPoint">79454.47</p>
          <p className="percentage">-880.34 (-1.10%)</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
