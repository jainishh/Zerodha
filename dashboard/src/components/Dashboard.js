import { React, useEffect } from "react";
import "./Dashboard.css";
import Button from "@mui/material/Button";

const Dashboard = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("loggedInUser", name);
    }
  }, []);

  return (
    <div className="DashboardContainer">
      <div className="header">
        <h2>Jainish</h2>
        <hr className="divider"></hr>
      </div>

      <div className="cardsWrapper">
        <div className="card">
          <div className="cardHeader">
            <i className="fa-solid fa-chart-simple"></i>
            <h4>Equity</h4>
          </div>
          <div className="cardBody">
            <div className="left">
              <h1>0</h1>
              <p>Margin available</p>
            </div>
            <div className="dividerVertical" />
            <div className="right">
              <p>Margin used: 0</p>
              <p>Opening balance: 0</p>
              <a href="#">View statement</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardHeader">
            <i className="fa-solid fa-droplet"></i>
            <h4>Commodity</h4>
          </div>
          <div className="cardBody">
            <div className="left">
              <h1>0</h1>
              <p>Margin available</p>
            </div>
            <div className="dividerVertical" />
            <div className="right">
              <p>Margin used: 0</p>
              <p>Opening balance: 0</p>
              <a href="#">View statement</a>
            </div>
          </div>
        </div>
        <div className="investmentKit">
          <i className="fa-solid fa-briefcase"></i>
          <p className="text-muted fs-6">
            You don't have any stocks in your DEMAT yet. Get started <br></br>
            with absolutely free equity investments.
          </p>
          <Button className="mt-5 buttonDash" variant="contained">
            Contained
          </Button>
          <br></br>
          <br></br>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
