import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import wlc from "../img/wlc.png";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { color } from "framer-motion";
import DatePicker from "@mui/lab/DatePicker"; // Import DatePicker
import TextField from "@mui/material/TextField"; // Make sure TextField is imported



const Dashboard = () => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "50px",
          
        }}
      >
        
        <Typography variant="h7" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
        <Typography variant="body2" sx={{color: "#8C8C8C"}} >
        Hi, welcome to Kolab dashboard 
        </Typography>
        </Box>
        <img src={wlc} alt="Welcome" style={{ width: "600px", height: "auto" }} />
        <Box
        sx={{
          position: "absolute",
          top: "31%", // Adjusted top
          left: "41%", // Adjusted left
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0)",
          padding: "20px",
          maxWidth: "500px",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "5px", fontSize: "0.75rem" }}>
          Hi, Vanshika Pandey
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Welcome to Kolab
        </Typography>

        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
          Project activity will be updated here. Click on the name section to
          <br /> set your configuration.
        </Typography>
      </Box>

      </Box>
      
      
  )
      
};

export default Dashboard;
