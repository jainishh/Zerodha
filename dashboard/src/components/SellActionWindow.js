import React, { useState, useRef, useContext } from "react";
import Draggable from "react-draggable";
import Button from "@mui/material/Button";
import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid, stockPrice, stockQty }) => {
  const [stockQuantity, setStockQuantity] = useState(stockQty);
  const nodeRef = useRef(null);
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = () => {
    // 👉 Simulate sell order (no backend)
    console.log("Sell order placed:", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    alert(
      `✅ Sell Order Placed!\nStock: ${uid}\nQty: ${stockQuantity}\nPrice: ₹${stockPrice}`
    );

    closeSellWindow();
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-header">
      <div ref={nodeRef} className="container" id="sell-window">
        <div
          className="drag-header"
          style={{
            cursor: "move",
            padding: "10px",
            background: "#f8d7da",
            fontWeight: "bold",
          }}
        >
          Sell Window
        </div>

        <div className="sellingInfo">
          <p>Qty held: {stockQty}</p>
          <p>Current Price: ₹{stockPrice}</p>
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
          </div>
        </div>

        <div className="buttons">
          <div className="btn-link">
            <Button
              className="btn"
              variant="contained"
              color="error"
              onClick={handleSellClick}
            >
              Sell
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

export default SellActionWindow;
