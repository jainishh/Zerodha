import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, stockPrice) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, stockPrice, stockQty) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  console.log("GeneralContextProvider");
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [selectedStockQty, setSelectedStockQty] = useState(0);

  const handleOpenBuyWindow = (uid, stockPrice) => {
    console.log("buyhel");
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(stockPrice);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  const handleOpenSellWindow = (uid, stockPrice, stockQty) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(stockPrice);
    setSelectedStockQty(stockQty);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
    setSelectedStockQty(0);
  };

  return (
    <>
      console.log("1223")
      <GeneralContext.Provider
        value={{
          openBuyWindow: handleOpenBuyWindow,
          closeBuyWindow: handleCloseBuyWindow,
          openSellWindow: handleOpenSellWindow,
          closeSellWindow: handleCloseSellWindow,
        }}
      >
        {props.children}

        {/* Dummy popup components */}
        {isBuyWindowOpen && (
          <BuyActionWindow
            uid={selectedStockUID}
            stockPrice={selectedStockPrice}
            onClose={handleCloseBuyWindow}
          />
        )}
        {isSellWindowOpen && (
          <SellActionWindow
            uid={selectedStockUID}
            stockPrice={selectedStockPrice}
            stockQty={selectedStockQty}
            onClose={handleCloseSellWindow}
          />
        )}
      </GeneralContext.Provider>
    </>
  );
};

export default GeneralContext;
