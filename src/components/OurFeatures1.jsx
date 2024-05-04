import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import leftImage from "../img/left-image.png"; 

const OurFeatures1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color:"#565656" }}>
          Our <span style={{ color: "#FFCA1D" }}>Features</span>
        </Typography>
      </Box>
      
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        paddingTop:"150px", 
        paddingBottom:"150px"}}>
        
      <Box sx={{ flex: 1, paddingRight: "50px", paddingLeft: "10px", position:"sticky", top:"0" }}>
        <img src={leftImage} alt="View" style={{ maxWidth: "100%", }} />
      </Box>

      <Box sx={{ flex: 1, paddingLeft: "-100px", position: "relative" }}>
          
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Seamless Task Management
        </Typography>

        <Divider sx={{ 
          marginTop: "40px", 
          marginBottom: "40px", 
          backgroundColor: "#FD9B79", 
          height: "3px", 
          width: "50px", 
          borderRadius: "5px" }} />

        <Typography variant="h6" sx={{ marginTop: "10px" }}>
        Effortlessly organize your tasks, set priorities, and track progress. 
        <br />Our intuitive interface makes task management a breeze, 
        <br />so you can focus on what matters most.
        </Typography>

        <Box sx={{ height: "300px" }} /> 

          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Collaboration Made Easy
          </Typography>

          <Divider sx={{ 
            marginTop: "40px", 
            marginBottom: "40px", 
            backgroundColor: "#3ADAD9", 
            height: "3px", 
            width: "50px", 
            borderRadius: "5px" }} />

          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Invite team members, assign tasks, and collaborate in real-time. 
            <br />Stay in sync and drive projects forward together.
          </Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default OurFeatures1;
