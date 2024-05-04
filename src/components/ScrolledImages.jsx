import React from "react";
import { Box } from "@mui/material";
import background from "../img/blur.png"; 
import dashboard from "../img/dashboard.png"; 

const ScrolledImages = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "150vh",
        overflow: "hidden",
      }}
    >
      
      <img
        src={background}
        alt="Background"
        style={{
          position: "absolute",
          top: "55%",
          left: "52%",
          transform: "translate(-50%, -50%)",
          maxWidth: "120%",
          maxHeight: "120%",
        }}
      />

      
      <img
        src={dashboard}
        alt="Home"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "80%",
          maxHeight: "80%",
        }}
      />
    </Box>
  );
};

export default ScrolledImages;

