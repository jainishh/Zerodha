import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PricingTable.css";

function PricingTable() {
  const [activeTab, setActiveTab] = useState("equity");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 770);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    equity: [
      [
        "Brokerage",
        "Zero Brokerage",
        "0.03% or Rs. 20/executed order whichever is lower",
        "0.03% or Rs. 20/executed order whichever is lower",
        "Flat Rs. 20 per executed order",
      ],
      [
        "STT/CTT",
        "0.1% on buy & sell",
        "0.025% on sell side",
        "0.02% on sell side",
        <ul>
          <li>
            0.125% of the intrinsic value on options that are bought and
            exercised
          </li>
          <li>0.1% on sell side (on premium)</li>
        </ul>,
      ],
      [
        "Transaction charges",
        "NSE: 0.00297% BSE: 0.00375%",
        "NSE: 0.00297% BSE: 0.00375%",
        "NSE: 0.00173% BSE: 0 ",
        "NSE: 0.03503% (on premium) BSE: 0.0325% (on premium)",
      ],
      [
        "GST",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
      ],
      [
        "SEBI charges",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
      ],
      [
        "Stamp charges",
        "0.015% or ₹1500 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
      ],
    ],
    currency: [
      [
        "Brokerage",
        "0.03% or ₹ 20/executed order whichever is lower",
        "₹ 20/executed order",
      ],
      ["STT/CTT", "No STT", "No STT"],
      [
        "Transaction Charges",
        "NSE: 0.0020%, BSE: 0.00045%",
        "NSE: 0.0020%, BSE: 0.001%",
      ],
      [
        "GST",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
      ],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      [
        "Stamp charges",
        "0.0001% or ₹10 / crore on buy side",
        "0.0001% or ₹10 / crore on buy side",
      ],
    ],
    commodity: [
      [
        "Brokerage",
        "0.03% or Rs. 20/executed order whichever is lower",
        "₹ 20/executed order",
      ],
      ["STT/CTT", "0.01% on sell side (Non-Agri)", "0.05% on sell side"],
      [
        "Transaction charges",
        "MCX: 0.0021%, NSE: 0.0001%",
        "MCX: 0.0418%, NSE: 0.001%",
      ],
      [
        "GST",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
      ],
      ["SEBI charges", "Agri:₹1 / crore, Non-agri:₹10 / crore", "₹10 / crore"],
      [
        "Stamp charges",
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
      ],
    ],
  };

  const headers = {
    equity: isMobile
      ? ["", "Equity Delivery", "Equity Intraday"]
      : [
          "",
          "Equity Delivery",
          "Equity Intraday",
          "F&O Futures",
          "F&O Options",
        ],

    fno: ["", "F&O Futures", "F&O Options"],

    currency: ["", "Currency Futures", "Currency Options"],

    commodity: ["", "Commodity Futures", "Commodity Options"],
  };

  const equityData = data.equity.map((row) =>
    isMobile ? row.slice(0, 3) : row
  );

  const fnoData = data.equity.map((row) => [row[0], ...row.slice(3, 5)]);

  const getTableData = () => {
    if (activeTab === "equity") return equityData;
    if (activeTab === "fno") return fnoData;
    return data[activeTab];
  };

  return (
    <div className="container p-4">
      <div className="nav d-flex">
        <button
          className={`head-btn ${activeTab === "equity" ? "active" : ""}`}
          onClick={() => setActiveTab("equity")}
        >
          <h1 style={{ fontSize: "1.5rem" }} className="h1table">
            Equity
          </h1>
        </button>
        {isMobile && (
          <button
            className={`head-btn ${activeTab === "fno" ? "active" : ""}`}
            onClick={() => setActiveTab("fno")}
          >
            <h1 style={{ fontSize: "1.5rem" }} className="h1table">
              F&O
            </h1>
          </button>
        )}
        <button
          className={`head-btn ${activeTab === "currency" ? "active" : ""}`}
          onClick={() => setActiveTab("currency")}
        >
          <h1 style={{ fontSize: "1.5rem" }} className="h1table">
            Currency
          </h1>
        </button>
        <button
          className={`head-btn ${activeTab === "commodity" ? "active" : ""}`}
          onClick={() => setActiveTab("commodity")}
        >
          <h1 style={{ fontSize: "1.5rem" }} className="h1table">
            Commodity
          </h1>
        </button>
      </div>

      <hr />

      <div className="table-container mt-4">
        <table className="table">
          <thead className="table-light table-head">
            <tr className="table-row">
              {headers[activeTab].map((head, index) => (
                <th key={index} className="table-header text-muted">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getTableData().map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((rowData, colIdx) => (
                  <td
                    key={colIdx}
                    className="table-data"
                    style={{ color: "#666" }}
                  >
                    {typeof rowData === "string" && rowData.includes(",")
                      ? rowData
                          .split(",")
                          .map((part, idx) => (
                            <div key={idx}>{part.trim()}</div>
                          ))
                      : rowData}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PricingTable;
