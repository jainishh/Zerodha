import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div
        className="row text-center herotopdiv"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1
          style={{
            color: "#424242",
            fontSize: "2rem",
            lineHeight: 1.25,
            fontWeight: 500,
          }}
        >
          Charges
        </h1>
        <p style={{ color: "#9b9b9b", fontSize: "1.45rem", fontWeight: 400 }}>
          List of all charges and taxes
        </p>
      </div>

      <div className="row">
        <div className="col-md-4 col-12 text-center p-5 heroimgdiv">
          <img
            src="media/images/pricing0.svg"
            alt="Free account opening"
            className="img-fluid"
            style={{ width: "16em" }}
          />
          <h2 style={{ fontSize: "1.75rem", color: "#424242" }}>
            Free equity delivery
          </h2>
          <p className="mt-4" style={{ fontSize: "1.1rem", color: "#666" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 text-center p-5 heroimgdiv">
          <img
            src="media/images/pricing0.svg"
            alt="Free equity delivery"
            className="img-fluid"
            style={{ width: "16em" }}
          />
          <h2 style={{ fontSize: "1.75rem", color: "#424242" }}>
            Intraday and F&O trades
          </h2>
          <p className="mt-4" style={{ fontSize: "1.1rem", color: "#666" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 text-center p-5 heroimgdiv">
          <img
            src="media/images/pricing20.svg"
            alt="Intraday and F&O"
            className="img-fluid"
            style={{ width: "16em" }}
          />
          <h2 style={{ fontSize: "1.75rem", color: "#424242" }}>
            Free direct MF
          </h2>
          <p className="mt-4" style={{ fontSize: "1.1rem", color: "#666" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
