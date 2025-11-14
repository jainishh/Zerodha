import React from "react";

function OpenAccount() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12 mt-4">
          <h2 style={{ color: "#424242", fontSize: "30px" }}>
            Open a Zerodha account
          </h2>
          <p className="mt-3" style={{ fontSize: "1.1em", color: "#666666" }}>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
        </div>
        <div className="col-12 mt-3">
          <button
            className="btn btn-primary fs-5 px-4 py-2 "
            style={{ backgroundColor: "#387ed1", fontWeight: "500" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
