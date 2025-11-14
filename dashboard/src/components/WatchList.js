// import React, { useState, useContext, useEffect } from "react";
// import "./WatchList.css";
// import watchlist from "../data/data.js";
// import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
// import { Grow, Tooltip } from "@mui/material";
// import GeneralContext from "./GeneralContext";

// const WatchList = ({ sidebar }) => {
//   const [searchStock, setSearchStock] = useState("");
//   const [listData, setListData] = useState([]);

//   // Load all watchlist initially
//   useEffect(() => {
//     setListData(watchlist);
//   }, []);

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchStock(value);

//     if (!value.trim()) {
//       setListData(watchlist);
//       return;
//     }

//     const filtered = watchlist.filter((s) =>
//       s.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setListData(filtered);
//   };

//   return (
//     <div
//       className={sidebar ? "sidebarWatchlistContainer" : "watchlistContainer"}
//     >
//       <form className="searchContainer">
//         <button type="submit" className="searchbtn">
//           <i className="fa-solid fa-magnifying-glass searchIcon"></i>
//         </button>
//         <input
//           type="text"
//           name="search"
//           id="search"
//           value={searchStock}
//           onChange={handleSearchChange}
//           placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="count">{listData.length} / 50</span>
//       </form>

//       <ul className="list">
//         {listData.map((stock, index) => (
//           <WatchListItem stock={stock} key={index} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WatchList;

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   return (
//     <li
//       onMouseEnter={() => setShowWatchlistActions(true)}
//       onMouseLeave={() => setShowWatchlistActions(false)}
//     >
//       <div className="item">
//         <p>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="arrowDown" />
//           ) : (
//             <KeyboardArrowUp className="arrowUp" />
//           )}
//           <span className={stock.isDown ? "itemDown" : "itemUp"}>
//             {stock.price}
//           </span>
//         </div>
//         {showWatchlistActions && (
//           <WatchListAction
//             uid={stock.name}
//             stockPrice={stock.price}
//             stockQty={10}
//           />
//         )}
//       </div>
//     </li>
//   );
// };

// const WatchListAction = ({ uid, stockPrice }) => {
//   const generalContext = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     console.log("buy");
//     generalContext.openBuyWindow(uid, stockPrice);
//   };
//   const handleSellClick = () => {
//     generalContext.openSellWindow(uid, stockPrice);
//   };

//   return (
//     <span className="action">
//       <span>
//         <Tooltip
//           title="Buy (B)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="buybtn" onClick={handleBuyClick}>
//             Buy
//           </button>
//         </Tooltip>
//         <Tooltip
//           title="Sell (S)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="sellbtn" onClick={handleSellClick}>
//             Sell
//           </button>
//         </Tooltip>
//         <Tooltip
//           title="Market Depth (D)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="Deptbtn">Depth</button>
//         </Tooltip>
//         <Tooltip
//           title="Chart (C)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="chartbtn">
//             <i className="fa-solid fa-chart-line"></i>
//           </button>
//         </Tooltip>
//         <Tooltip
//           title="Delete (Del)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="deletebtn">
//             <i className="fa-solid fa-trash"></i>
//           </button>
//         </Tooltip>
//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//           <button className="morebtn">
//             <i className="fa-solid fa-ellipsis"></i>
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };

// //2
// import React, { useState, useEffect } from "react";
// import "./WatchList.css";
// import watchlist from "../data/data.js";
// import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
// import { Grow, Tooltip } from "@mui/material";
// import BuyActionWindow from "./BuyActionWindow"; // ✅ Import Buy window
// import SellActionWindow from "./SellActionWindow"; // ✅ Import Sell window

// const WatchList = ({ sidebar }) => {
//   const [searchStock, setSearchStock] = useState("");
//   const [listData, setListData] = useState([]);
//   const [selectedStock, setSelectedStock] = useState(null);
//   const [actionType, setActionType] = useState(null); // "buy" or "sell"

//   // Load all watchlist initially
//   useEffect(() => {
//     setListData(watchlist);
//   }, []);

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchStock(value);

//     if (!value.trim()) {
//       setListData(watchlist);
//       return;
//     }

//     const filtered = watchlist.filter((s) =>
//       s.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setListData(filtered);
//   };

//   // ✅ Open Buy Window
//   const handleBuyClick = (stock) => {
//     setSelectedStock(stock);
//     setActionType("buy");
//   };

//   // ✅ Open Sell Window
//   const handleSellClick = (stock) => {
//     setSelectedStock(stock);
//     setActionType("sell");
//   };

//   // ✅ Close both windows
//   const handleCloseActionWindow = () => {
//     setSelectedStock(null);
//     setActionType(null);
//   };

//   return (
//     <div
//       className={sidebar ? "sidebarWatchlistContainer" : "watchlistContainer"}
//     >
//       <form className="searchContainer">
//         <button type="submit" className="searchbtn">
//           <i className="fa-solid fa-magnifying-glass searchIcon"></i>
//         </button>
//         <input
//           type="text"
//           name="search"
//           id="search"
//           value={searchStock}
//           onChange={handleSearchChange}
//           placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="count">{listData.length} / 50</span>
//       </form>

//       <ul className="list">
//         {listData.map((stock, index) => (
//           <WatchListItem
//             stock={stock}
//             key={index}
//             onBuyClick={() => handleBuyClick(stock)}
//             onSellClick={() => handleSellClick(stock)}
//           />
//         ))}
//       </ul>

//       {/* ✅ Conditional rendering of Buy or Sell windows */}
//       {selectedStock && actionType === "buy" && (
//         <BuyActionWindow
//           uid={selectedStock.name}
//           stockPrice={selectedStock.price}
//           onClose={handleCloseActionWindow}
//         />
//       )}

//       {selectedStock && actionType === "sell" && (
//         <SellActionWindow
//           uid={selectedStock.name}
//           stockPrice={selectedStock.price}
//           onClose={handleCloseActionWindow}
//         />
//       )}
//     </div>
//   );
// };

// export default WatchList;

// const WatchListItem = ({ stock, onBuyClick, onSellClick }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   return (
//     <li
//       onMouseEnter={() => setShowWatchlistActions(true)}
//       onMouseLeave={() => setShowWatchlistActions(false)}
//     >
//       <div className="item">
//         <p>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="arrowDown" />
//           ) : (
//             <KeyboardArrowUp className="arrowUp" />
//           )}
//           <span className={stock.isDown ? "itemDown" : "itemUp"}>
//             {stock.price}
//           </span>
//         </div>

//         {showWatchlistActions && (
//           <WatchListAction
//             uid={stock.name}
//             stockPrice={stock.price}
//             onBuyClick={onBuyClick}
//             onSellClick={onSellClick}
//           />
//         )}
//       </div>
//     </li>
//   );
// };

// const WatchListAction = ({ uid, stockPrice, onBuyClick, onSellClick }) => {
//   return (
//     <span className="action">
//       <span>
//         <Tooltip
//           title="Buy (B)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="buybtn" onClick={onBuyClick}>
//             Buy
//           </button>
//         </Tooltip>

//         <Tooltip
//           title="Sell (S)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="sellbtn" onClick={onSellClick}>
//             Sell
//           </button>
//         </Tooltip>

//         <Tooltip
//           title="Market Depth (D)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="Deptbtn">Depth</button>
//         </Tooltip>

//         <Tooltip
//           title="Chart (C)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="chartbtn">
//             <i className="fa-solid fa-chart-line"></i>
//           </button>
//         </Tooltip>

//         <Tooltip
//           title="Delete (Del)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="deletebtn">
//             <i className="fa-solid fa-trash"></i>
//           </button>
//         </Tooltip>

//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//           <button className="morebtn">
//             <i className="fa-solid fa-ellipsis"></i>
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };

//main code and working
// import React, { useState, useEffect } from "react";
// import "./WatchList.css";
// import watchlist from "../data/data.js";
// import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
// import { Grow, Tooltip } from "@mui/material";
// import BuyActionWindow from "./BuyActionWindow";
// import SellActionWindow from "./SellActionWindow";

// const WatchList = ({ sidebar }) => {
//   const [searchStock, setSearchStock] = useState("");
//   const [listData, setListData] = useState([]);
//   const [selectedStock, setSelectedStock] = useState(null);
//   const [actionType, setActionType] = useState(null); // "buy" or "sell"

//   //  Load all stocks initially
//   useEffect(() => {
//     setListData(watchlist);
//   }, []);

//   //  Handle Search
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchStock(value);

//     if (!value.trim()) {
//       setListData(watchlist);
//       return;
//     }

//     const filtered = watchlist.filter((s) =>
//       s.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setListData(filtered);
//   };

//   // Open Buy Window (with re-render fix)
//   const handleBuyClick = (stock) => {
//     setActionType(null);
//     setSelectedStock(null);

//     setTimeout(() => {
//       setSelectedStock(stock);
//       setActionType("buy");
//     }, 0);
//   };

//   // Open Sell Window (with re-render fix)
//   const handleSellClick = (stock) => {
//     setActionType(null);
//     setSelectedStock(null);

//     setTimeout(() => {
//       setSelectedStock(stock);
//       setActionType("sell");
//     }, 0);
//   };

//   // Close both popups
//   const handleCloseActionWindow = () => {
//     setSelectedStock(null);
//     setActionType(null);
//   };

//   return (
//     <div
//       className={sidebar ? "sidebarWatchlistContainer" : "watchlistContainer"}
//     >
//       {/* Search Box */}
//       <form className="searchContainer">
//         <button type="submit" className="searchbtn">
//           <i className="fa-solid fa-magnifying-glass searchIcon"></i>
//         </button>
//         <input
//           type="text"
//           name="search"
//           id="search"
//           value={searchStock}
//           onChange={handleSearchChange}
//           placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="count">{listData.length} / 50</span>
//       </form>

//       {/* Watchlist */}
//       <ul className="list">
//         {listData.map((stock, index) => (
//           <WatchListItem
//             key={index}
//             stock={stock}
//             onBuyClick={() => handleBuyClick(stock)}
//             onSellClick={() => handleSellClick(stock)}
//           />
//         ))}
//       </ul>

//       {/* 💰 Conditional Rendering of Buy / Sell Windows */}
//       {selectedStock && actionType === "buy" && (
//         <BuyActionWindow
//           uid={selectedStock.name}
//           stockPrice={selectedStock.price}
//           onClose={handleCloseActionWindow}
//         />
//       )}

//       {selectedStock && actionType === "sell" && (
//         <SellActionWindow
//           uid={selectedStock.name}
//           stockPrice={selectedStock.price}
//           onClose={handleCloseActionWindow}
//         />
//       )}
//     </div>
//   );
// };

// export default WatchList;

// /* -------------------- CHILD COMPONENTS -------------------- */

// const WatchListItem = ({ stock, onBuyClick, onSellClick }) => {
//   const [showActions, setShowActions] = useState(false);

//   return (
//     <li
//       onMouseEnter={() => setShowActions(true)}
//       onMouseLeave={() => setShowActions(false)}
//     >
//       <div className="item">
//         <p>{stock.name}</p>

//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="arrowDown" />
//           ) : (
//             <KeyboardArrowUp className="arrowUp" />
//           )}
//           <span className={stock.isDown ? "itemDown" : "itemUp"}>
//             {stock.price}
//           </span>
//         </div>

//         {showActions && (
//           <WatchListAction
//             uid={stock.name}
//             stockPrice={stock.price}
//             onBuyClick={onBuyClick}
//             onSellClick={onSellClick}
//           />
//         )}
//       </div>
//     </li>
//   );
// };

// const WatchListAction = ({ uid, stockPrice, onBuyClick, onSellClick }) => {
//   return (
//     <span className="action">
//       <span>
//         {/* ✅ Buy Button */}
//         <Tooltip
//           title="Buy (B)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="buybtn" onClick={onBuyClick}>
//             Buy
//           </button>
//         </Tooltip>

//         {/* ✅ Sell Button */}
//         <Tooltip
//           title="Sell (S)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="sellbtn" onClick={onSellClick}>
//             Sell
//           </button>
//         </Tooltip>

//         {/* Depth */}
//         <Tooltip
//           title="Market Depth (D)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="Deptbtn">Depth</button>
//         </Tooltip>

//         {/* Chart */}
//         <Tooltip
//           title="Chart (C)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="chartbtn">
//             <i className="fa-solid fa-chart-line"></i>
//           </button>
//         </Tooltip>

//         {/* Delete */}
//         <Tooltip
//           title="Delete (Del)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="deletebtn">
//             <i className="fa-solid fa-trash"></i>
//           </button>
//         </Tooltip>

//         {/* More */}
//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//           <button className="morebtn">
//             <i className="fa-solid fa-ellipsis"></i>
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };

import React, { useState, useEffect } from "react";
import "./WatchList.css";
import watchlist from "../data/data.js";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";
import axios from "axios";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const WatchList = ({ sidebar }) => {
  const [searchStock, setSearchStock] = useState("");
  const [listData, setListData] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [actionType, setActionType] = useState(null); // "buy" or "sell"
  const [holdings, setHoldings] = useState([]);

  // ✅ Fetch holdings from backend
  useEffect(() => {
    axios
      .get("http://localhost:3002/addHoldings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  //  Load all watchlist data initially
  useEffect(() => {
    setListData(watchlist);
  }, []);

  // 🔍 Handle Search
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

  // 💰 Open Buy Window
  const handleBuyClick = (stock) => {
    setActionType(null);
    setSelectedStock(null);

    setTimeout(() => {
      setSelectedStock(stock);
      setActionType("buy");
    }, 0);
  };

  // 💸 Open Sell Window (check if in holdings first)
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

  // ❌ Close Buy/Sell Window
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
        {/* ✅ Buy */}
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

        {/* ✅ Sell */}
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
