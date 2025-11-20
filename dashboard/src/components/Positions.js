import React, { useEffect, useState } from "react";
import "./Orders&Holdings&Posiions.css";
// import positions from "../data/data.js";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_API_URL}/addPositions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((res) => {
        setAllPositions(res.data);
      });
  }, []);

  return (
    <div className="positionsCan">
      <h3 className="title mt-4" style={{ color: "#494949" }}>
        Positions ({allPositions.length})
      </h3>
      <div className="order-table mb-5">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
