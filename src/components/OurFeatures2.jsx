import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import rightimage from "../img/right-image.jpg"; 

const OurFeatures2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
      }}
    >

      <Box sx={{ flex: 1, paddingRight: "100px", paddingLeft: "100px", paddingBottom:"20px" }}>

        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Visualize Your Goals
        </Typography>

        <Divider sx={{ 
          marginTop: "40px", 
          marginBottom: "40px", 
          backgroundColor: "#FFCA1D", 
          height: "3px", 
          width: "50px", 
          borderRadius: "5px" }} />

        <Typography variant="h6" sx={{ marginTop: "10px"}}>
          Visualize your goals and milestones with interactive timelines 
          <br />and progress charts. 
          <br />See your progress at a glance.
        </Typography>

        <Box sx={{ height: "300px" }} /> 

        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Reminders and Notifications
        </Typography>

        <Divider sx={{ 
          marginTop: "40px", 
          marginBottom: "40px", 
          backgroundColor: "#76B1A6", 
          height: "3px", 
          width: "50px", 
          borderRadius: "5px" }} />

        <Typography variant="h6" sx={{ marginTop: "10px"}}>
          Never miss a deadline again. 
          <br /> Set reminders, receive notifications, and keep your tasks on track.
        </Typography>

      </Box>

      <Box sx={{ flex: 1, paddingLeft: "20px", position: "sticky" , top:"0" }}>
        <img src={rightimage} alt="View" style={{ maxWidth: "100%" }} />
      </Box>
    </Box>
  );
};

export default OurFeatures2;        