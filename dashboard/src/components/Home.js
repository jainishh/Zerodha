import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";
import WatchList from "./WatchList";
import Dashbord from "./Dashboard";
import "./Home.css";

const Home = () => {
  return (
    <div className="content">
      {/* Row 1 */}
      <div className="row">
        <div className="topbar" style={{ height: "50px" }}>
          <TopBar></TopBar>
        </div>
        <div className="menu" style={{ height: "50px" }}>
          <Menu></Menu>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="watchlist" style={{ height: "50px" }}>
          <WatchList></WatchList>
        </div>
        <div className="dashboard" style={{ height: "50px" }}>
          <Dashbord></Dashbord>
        </div>
      </div>
    </div>
  );
};

export default Home;
