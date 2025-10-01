import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import Button from "@mui/material/Button";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, stockPrice }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [Price, setStockPrice] = useState(stockPrice);
  const nodeRef = useRef(null);

  // ✅ Get context functions properly
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    // 👉 Instead of axios, just simulate
    console.log("Order placed:", {
      name: uid,
      qty: stockQuantity,
      price: Price,
      mode: "BUY",
    });

    alert(
      `✅ Order placed!\nStock: ${uid}\nQty: ${stockQuantity}\nPrice: ₹${Price}`
    );

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-header">
      <div ref={nodeRef} className="container" id="buy-window">
        <div
          className="drag-header"
          style={{
            cursor: "move",
            padding: "10px",
            background: "#e0e0e0",
            fontWeight: "bold",
          }}
        >
          Buy Window
        </div>

        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(e.target.value)}
                value={Price}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>
            Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}
          </span>
          <div className="btn-link">
            <Button
              className="btn"
              variant="contained"
              onClick={handleBuyClick}
            >
              Buy
            </Button>
            <Button
              className="btn"
              variant="contained"
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default BuyActionWindow;
