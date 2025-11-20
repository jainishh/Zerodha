import React, { useState, useEffect } from "react";
import "./WatchList.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";
import axios from "axios";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const WatchList = ({ sidebar }) => {
  const [searchStock, setSearchStock] = useState("");
  const [listData, setListData] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [actionType, setActionType] = useState(null); // "buy" or "sell"
  const [holdings, setHoldings] = useState([]);

  // Fetch All Watchlist Items from Backend
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_API_URL}/allLists`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setListData(res.data);
        setOriginalList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching allLists:", err);
      });
  }, []);

  //  Handle Search
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchStock(value);

    if (!value.trim()) {
      setListData(originalList);
      return;
    }

    const filtered = originalList.filter((s) =>
      s.name.toLowerCase().includes(value.toLowerCase())
    );
    setListData(filtered);
  };

  //  Open Buy Window
  const handleBuyClick = (stock) => {
    setActionType(null);
    setSelectedStock(null);

    setTimeout(() => {
      setSelectedStock(stock);
      setActionType("buy");
    }, 0);
  };

  //  Fetch holdings from backend
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_API_URL}/addHoldings`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  //  Open Sell Window (check if in holdings first)
  const handleSellClick = (stock) => {
    const hasStock = holdings.some(
      (item) => item.name.toLowerCase() === stock.name.toLowerCase()
    );

    //OR
    // const hasStock = holdings.find((held)=>held.name === stock.name)

    if (!hasStock) {
      alert(`You don't hold any units of ${stock.name} to sell.`);
      return;
    }

    setActionType(null);
    setSelectedStock(null);

    setTimeout(() => {
      setSelectedStock(stock);
      setActionType("sell");
    }, 0);
  };

  //  Close Buy/Sell Window
  const handleCloseActionWindow = () => {
    setSelectedStock(null);
    setActionType(null);
  };

  return (
    <div
      className={sidebar ? "sidebarWatchlistContainer" : "watchlistContainer"}
    >
      {/* Search Box */}
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

      {/* Watchlist Items */}
      <ul className="list">
        {listData.map((stock, index) => (
          <WatchListItem
            key={index}
            stock={stock}
            onBuyClick={() => handleBuyClick(stock)}
            onSellClick={() => handleSellClick(stock)}
          />
        ))}
      </ul>

      {/* Buy/Sell Popups */}
      {selectedStock && actionType === "buy" && (
        <BuyActionWindow
          uid={selectedStock.name}
          stockPrice={selectedStock.price}
          onClose={handleCloseActionWindow}
        />
      )}

      {selectedStock && actionType === "sell" && (
        <SellActionWindow
          uid={selectedStock.name}
          stockPrice={selectedStock.price}
          onClose={handleCloseActionWindow}
        />
      )}
    </div>
  );
};

export default WatchList;

/* -------------------- CHILD COMPONENTS -------------------- */

const WatchListItem = ({ stock, onBuyClick, onSellClick }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
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

        {showActions && (
          <WatchListAction
            uid={stock.name}
            stockPrice={stock.price}
            onBuyClick={onBuyClick}
            onSellClick={onSellClick}
          />
        )}
      </div>
    </li>
  );
};

const WatchListAction = ({ uid, stockPrice, onBuyClick, onSellClick }) => {
  return (
    <span className="action">
      <span>
        {/* Buy */}
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buybtn" onClick={onBuyClick}>
            Buy
          </button>
        </Tooltip>

        {/* Sell */}
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sellbtn" onClick={onSellClick}>
            Sell
          </button>
        </Tooltip>

        {/* Depth */}
        <Tooltip
          title="Market Depth (D)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="Deptbtn">Depth</button>
        </Tooltip>

        {/* Chart */}
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

        {/* Delete */}
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

        {/* More */}
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="morebtn">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
