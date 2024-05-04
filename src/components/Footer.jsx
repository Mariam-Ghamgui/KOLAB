import React from "react";
import { Box, Typography, Button } from "@mui/material";
import logo from "../img/logo.png";
import footerbackground from "../img/footerbackground.png"; 
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/near-me";


const Footer = () => {
  return (
    <Box
        sx={{
          background: `url(${footerbackground})`,
          backgroundSize: "cover",
          textAlign: "center",
          padding: "50px 0",
          marginTop: "200px",
          marginBottom: "0px",
        }}
      >  

      <img src={logo} alt="Logo" style={{ maxWidth: "200px", margin: "0 auto" }} />

      <Typography variant="h5" sx={{ marginTop: "20px", fontWeight: "bold" , color:"#2D3150"}}>
        Get Better Work Done
      </Typography>

      <Typography variant="h6" sx={{ margin: "10px 0", color:"#2D3150" }}>
        Try It For Free
      </Typography>

      <Link to="/login">
        <Button
          variant="contained"
          color="success"        
          sx={{ 
            marginTop: "20px",
            background: "#FFFFFF",
            color: "#000000",
            typography: {
              fontSize: "11px",
              fontWeight: "bold"
            },
            height: "40px", 
            width: "120px", 
            borderRadius: "10px", 
          }}
        >
          <Icon icon={locationIcon} style={{ marginRight: "5px", fontSize: "20px", marginBottom:"2px"}} />
          Subscribe
        </Button>
      </Link>
    </Box>
  );
};

export default Footer;
