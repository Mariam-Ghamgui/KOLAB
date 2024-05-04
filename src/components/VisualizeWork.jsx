import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ImageView from "../img/view.png"; 
import ImageOverlay1 from "../img/overlay1.png"; 
import ImageOverlay2 from "../img/overlay2.png";
import ImageOverlay3 from "../img/overlay3.png";

const VisualizeWork = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        marginBottom: "0px",
      }}
    >
      <Box sx={{ flex: 1, paddingRight: "100px", paddingLeft: "100px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Visualize work with Views
        </Typography>

        <Divider sx={{ 
          marginTop: "40px", 
          marginBottom: "40px", 
          backgroundColor: "blue", 
          height: "3px", 
          width: "50px", 
          borderRadius: "5px" 
        }} />

        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          View data as a map, calendar, timeline, kanban, and more. 
          The easy-to-use, visual interface lets any team member jump in and get started, 
          no training required.
        </Typography>
      </Box>

      <Box sx={{ flex: 1, paddingLeft: "20px", position: "relative" }}>
      
        <img 
          src={ImageOverlay1} 
          alt="Overlay1" 
          style={{ 
            position: "absolute", 
            top: 120, 
            left: 20, 
            zIndex: 1, 
            animation: "animateOverlay1 4s infinite alternate", 
          }} 
        />

        <img 
          src={ImageOverlay2} 
          alt="Overlay2" 
          style={{ 
            position: "absolute", 
            top: 10, 
            left: 300 ,
            zIndex: 1,
            animation: "animateOverlay2 3s infinite alternate", 
          }} 
        />

        <img 
          src={ImageOverlay3} 
          alt="Overlay3" 
          style={{ 
            position: "absolute", 
            bottom: 25, 
            right: 160,
            zIndex: 1, 
            animation: "animateOverlay3 5s infinite alternate", 
          }} 
        />

        <img 
          src={ImageView} 
          alt="View" 
          style={{ maxWidth: "100%", animation: "rotation 50s infinite linear", zIndex: 0 }} 
        />
        
        <style>
          {`
            @keyframes rotation {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes animateOverlay1 {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(20px);
              }
            }

            @keyframes animateOverlay2 {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(20px);
              }
            }

            @keyframes animateOverlay3 {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-20px);
              }
            }
          `}
        </style>
      </Box>
    </Box>
  );
};

export default VisualizeWork;
