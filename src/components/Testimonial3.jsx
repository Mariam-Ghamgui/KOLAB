import React from "react";
import { Box, Typography } from "@mui/material";
import worldMapBackground from "../img/world-map.png"; 
import userImage from "../img/profile3.png"; 
import left from "../img/left.png"; 

const Testimonial3 = () => {
  return (
    <Box>

      <Box
        sx={{
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Client
        </Typography>
        <Typography variant="h4" sx={{ color: "#FFCA1D", fontWeight: "bold"}}>
          Testimonials
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          background: `url(${worldMapBackground})`,
          backgroundSize: "70%", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
          paddingTop: "120px", 
          paddingBottom: "0px", 
          marginBottom: "0px", 
          height: "80vh",
        }}
      >

        <img
          src={userImage}
          alt="User"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            marginRight: "0px",
            marginLeft: "700px",
            marginBottom: "0px",
            position: "relative", 
            zIndex: "1", 
          }}
        />

        <img
          src={left}
          alt="User"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            marginRight: "0px",
            marginLeft: "570px",
            marginTop: "-10px",
            position: "relative", 
            zIndex: "1", 
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "46%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)", 
            padding: "20px",
            maxWidth: "300px",
            textAlign: "center", 
          }}
        >

          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "0px", fontSize: "1rem" }}>
            Emily Johnson, Small Business Owner
          </Typography>

          <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
          "With <b>Kolab</b>, I've finally gained control over my tasks. It's a game-changer."
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial3;
