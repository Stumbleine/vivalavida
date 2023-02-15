import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Player from "./Player";

function Dashboard() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <Navbar handleOpenSideBar={() => setOpenSideBar(true)} />
      <Sidebar
        open={openSideBar}
        handleCloseSideBar={() => setOpenSideBar(false)}
      />
      <Outlet />
      <Player />
    </>
  );
}

export default Dashboard;
