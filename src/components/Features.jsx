import React from "react";
import { Typography, Box } from "@mui/material";
import feature1 from "../img/feature1.png"; 
import feature2 from "../img/feature2.png";
import feature3 from "../img/feature3.png";

const Features = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        paddingTop:"200px"
      }}
    >
    
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "150px",
        }}
      >

        <Typography variant="h4" sx={{ fontWeight: "bold", color:"#565656" }}>
          What you <span style={{ color: "#FFCA1D" }}>can do?</span>
        </Typography>

      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        
        <Box sx={{ textAlign: "center" }}>

          <img src={feature1} alt="Feature 1" style={{ maxWidth: "20%", height: "auto" , paddingBottom:"30px"}} />

          <Typography variant="h6" sx={{ marginTop: "10px", paddingBottom:"20px", fontWeight: "bold", color: "#2B3377" }}>
            Boost your workflow
          </Typography>

          <Typography variant="body1" sx={{ marginTop: "10px" }}>
          Reviewing completed tasks enhances your workflow 
          <br />and motivates you to work at a faster pace
          </Typography>

        </Box>

        <Box sx={{ textAlign: "center" }}>

          <img src={feature2} alt="Feature 2" style={{ maxWidth: "20%", height: "auto", paddingBottom:"30px" }} />

          <Typography variant="h6" sx={{ marginTop: "10px", paddingBottom:"20px", fontWeight: "bold", color: "#2B3377" }}>
            Keep tasks in one place
          </Typography>

          <Typography variant="body1" sx={{ marginTop: "10px" }}>
          Efficiently organizing your tasks not only saves 
          <br />valuable time but also accelerates your progress
          </Typography>

        </Box>

        <Box sx={{ textAlign: "center" }}>

          <img src={feature3} alt="Feature 3" style={{ maxWidth: "20%", height: "auto", paddingBottom:"30px" }} />

          <Typography variant="h6" sx={{ marginTop: "10px", paddingBottom:"20px", fontWeight: "bold", color: "#2B3377"}}>
            Visualize Your Goals
          </Typography>

          <Typography variant="body1" sx={{ marginTop: "10px" }}>
            Visualize your goals and milestones  
            <br />
            with interactive timelines and progress charts
          </Typography>

        </Box>

      </Box>
    </Box>
  );
};

export default Features;