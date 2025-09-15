import React, { useEffect, useState } from "react";
import "./Orders&Holdings&Posiions.css";
import ordersData from "../data/data.js";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // Simulate fetching data
    setOrders(ordersData);
  }, []);

  return (
    <div className="containerOrders">
      {/* <h3 className="title">Orders</h3> */}
      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {orders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty ?? 0}</td>
                <td>
                  {typeof stock.price === "number"
                    ? stock.price.toFixed(2)
                    : "0.00"}
                </td>
                <td className="dayClass">{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Orders;
