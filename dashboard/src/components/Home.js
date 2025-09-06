import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";
import WatchList from "./WatchList";
import { Outlet } from "react-router-dom"; // import Outlet
import "./Home.css";

const Home = () => {
  return (
    <div className="content">
      {/* Row 1 */}
      <div className="row">
        <div className="topbar" style={{ height: "50px" }}>
          <TopBar />
        </div>
        <div className="menu" style={{ height: "50px" }}>
          <Menu />
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="watchlist" style={{ height: "50px" }}>
          <WatchList />
        </div>

        {/* This will change depending on route */}
        <div className="outlet" style={{ height: "50px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
