import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ background: "#ffffff" }}>
      <Toolbar>
        <Logo />
        <Box sx={{ flexGrow: 1 }} /> 
        <Button
          color='success'
          variant="contained" 
          component={Link} 
          to="/signin"
          sx={{ 
            background: "#BFBFBF",
            borderRadius: "20px", 
            fontSize: "10.5px", 
            color: "FFFFFF", 
            textTransform: "none", 
            py: 0.8,
            px: 2.75,}}
          >
          Explore features
        </Button>
        <Box sx={{ mx: 0.5 }} /> 
        <Button
          color='success' 
          variant="contained" 
          component={Link} 
          to="/signup"
          sx={{ 
            background: "#76B1A6",
            borderRadius: "20px", 
            fontSize: "10.5px", 
            color: "#ffffff", 
            textTransform: "none", 
            py: 0.8,
            px: 2.75, }}
          >
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="/static/logo.jpg" alt="Logo" sx={{ width: 120, height: 50 }} />
      </Link>
    </Box>
  );
};

export default Navbar;
