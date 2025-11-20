import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import WatchList from "./WatchList";

const Allroutes = () => {
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
    <Routes>
      {/* Parent Layout */}

      <Route path="/" element={<Home />}>
        {/* Nested Routes appear in <Outlet /> */}

        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Route>
    </Routes>
  );
};

export default Allroutes;
