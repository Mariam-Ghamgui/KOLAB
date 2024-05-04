import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from React Router
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Button,
  List,
  ListItem,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; 
import NotificationsIcon from "@mui/icons-material/Notifications";
import profileImage from "../img/profile.png"; // Replace with the actual path to your image
import Profile from "./Profile";

const TopBar = () => {
  const [menudata, setMenudata] = useState('Profile'); 

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer - 1,
        background: "none",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        marginLeft: "240px",
      }}
    >
      <Toolbar>
        <TextField
          id="search"
          label="Search for Application here"
          variant="outlined"
          size="small"
          sx={{ 
            marginLeft: "230px", 
            width: "500px", 
            backgroundColor: "#",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        
        {/* Notification Icon */}
        <IconButton color="inherit" style={{ marginLeft:"700px" }}>
          <NotificationsIcon />
        </IconButton>

        {/* Make the Avatar clickable using a Link */}
        <List>
          <ListItem component={Link} to="/Profile">
            <Avatar src={profileImage} alt="Profile" />
          </ListItem>
        </List>
        
        <Box>
          {menudata === <Profile />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
