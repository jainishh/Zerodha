import React, { useState, useContext, useEffect } from "react";
import "./WatchList.css";
import watchlist from "../data/data.js";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";
import GeneralContext from "./GeneralContext";

const WatchList = ({ sidebar }) => {
  const [searchStock, setSearchStock] = useState("");
  const [listData, setListData] = useState([]);

  // Load all watchlist initially
  useEffect(() => {
    setListData(watchlist);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchStock(value);

    if (!value.trim()) {
      setListData(watchlist);
      return;
    }

    const filtered = watchlist.filter((s) =>
      s.name.toLowerCase().includes(value.toLowerCase())
    );
    setListData(filtered);
  };

  return (
    <div
      className={sidebar ? "sidebarWatchlistContainer" : "watchlistContainer"}
    >
      <form className="searchContainer">
        <button type="submit" className="searchbtn">
          <i className="fa-solid fa-magnifying-glass searchIcon"></i>
        </button>
        <input
          type="text"
          name="search"
          id="search"
          value={searchStock}
          onChange={handleSearchChange}
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="count">{listData.length} / 50</span>
      </form>

      <ul className="list">
        {listData.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="arrowDown" />
          ) : (
            <KeyboardArrowUp className="arrowUp" />
          )}
          <span className={stock.isDown ? "itemDown" : "itemUp"}>
            {stock.price}
          </span>
        </div>
        {showWatchlistActions && (
          <WatchListAction
            uid={stock.name}
            stockPrice={stock.price}
            stockQty={10}
          />
        )}
      </div>
    </li>
  );
};

const WatchListAction = ({ uid, stockPrice }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid, stockPrice);
  };
  const handleSellClick = () => {
    alert("Sell window (dummy) for " + uid);
  };

  return (
    <span className="action">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buybtn" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sellbtn" onClick={handleSellClick}>
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Market Depth (D)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="Deptbtn">Depth</button>
        </Tooltip>
        <Tooltip
          title="Chart (C)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="chartbtn">
            <i className="fa-solid fa-chart-line"></i>
          </button>
        </Tooltip>
        <Tooltip
          title="Delete (Del)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="deletebtn">
            <i className="fa-solid fa-trash"></i>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="morebtn">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
