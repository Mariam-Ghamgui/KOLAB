import React from "react";
import { Box } from "@mui/material";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import Dashboard from "../components/Dashboard";
import Tasks from "../components/Tasks";
import Calendar from "../components/Calendar";
import Conversation from "../components/Conversation";

const MainLayout = () => {
  return (
    <Box>
      <SideMenu />
      <TopBar />
      {/* Add your main content components here */}
      <Dashboard />
      {/* Other content components */}
    </Box>
  );
};

export default MainLayout;
