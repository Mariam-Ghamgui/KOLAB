import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  CssBaseline,
  IconButton,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import logo from "../img/logobg.png";
import light from "../img/light.png";
import Dashboard from "./Dashboard";
import Tasks from "./Tasks";
import Projects from "./Projects";
import Calendar from "./Calendar";
import Conversation from "./Conversation";

const drawerWidth = 240;

const SideMenu = () => {
  const [open, setOpen] = useState(true);
  const [menudata, setMenudata] = useState('Dashboard'); 

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 64,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 64,
          },
        }}
      >
        <IconButton onClick={toggleDrawer} sx={{ }}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>

        {open && (
          <>
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "80%",
                height: "12%",
                padding: "20px",
              }}
            />
            <List>
              <ListItem onClick= {()=> setMenudata("Dashboard")}>
                <Icon icon="heroicons:squares-2x2-20-solid" style={{ marginRight: '8px' }} />
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem onClick= {()=> setMenudata("Tasks")}>
                <Icon icon="uis:chart" style={{ marginRight: '8px' }} />
                <ListItemText primary="Tasks" />
              </ListItem>
              <ListItem onClick= {()=> setMenudata("Projects")}>
                <Icon icon="fa6-solid:square-pen" style={{ marginRight: '8px' }} />
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem onClick= {()=> setMenudata("Calendar")}>
                <Icon icon="solar:calendar-bold" style={{ marginRight: '8px' }} />
                <ListItemText primary="Calendar" />
              </ListItem>
              <ListItem onClick= {()=> setMenudata("Conversation")}>
                <Icon icon="ant-design:message-filled" style={{ marginRight: '8px' }} />
                <ListItemText primary="Conversation" />
              </ListItem>
            </List>
          </>
        )}

        {open && (
          <>
            <img
              src={light}
              alt="Image"
              style={{ width: "100%", marginTop: "80px" }}
            />
            <Divider
              sx={{
                backgroundColor: "#D2D2D2",
                height: "2px",
                width: "190px",
                borderRadius: "5px",
                marginLeft: "20px",
              }}
            />
            <List>
              <ListItem button component={Link} to="/login">
                <Icon icon="majesticons:logout" style={{ marginRight: '12px' }} />
                <ListItemText primary="Login" />
              </ListItem>
            </List>
          </>
        )}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {menudata === "Dashboard" && <Dashboard />}
        {menudata === "Tasks" && <Tasks />}
        {menudata === "Projects" && <Projects />}
        {menudata === "Calendar" && <Calendar />}
        {menudata === "Conversation" && <Conversation />}
      </Box>
    </Box>
  );
};

export default SideMenu;
