import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box , Divider} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion"; 
import landingpage from "../img/landingpage.png";
import logo from "../img/logo.png"; 
import plane from "../img/plane.png"; 
import row from "../img/row.png"; 
import deco1 from "../img/deco1.png"; 
import deco2 from "../img/deco2.png"; 


const GetStarted = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "160vh",
        background: `url(${landingpage})`,
        backgroundSize: "cover",
        backgroundPosition: "left", 
        m: 0, 
        alignItems: "center", 
        justifyContent: "space-between", 
        padding: theme.spacing(4), 

      }}
    >

      <Box>
        <Box 
          sx={{ 
            textAlign: "right", 
            mt: theme.spacing(0), 
            mr: theme.spacing(15), 
            marginBottom: theme.spacing(0),  
            marginTop: theme.spacing(2) ,  
            marginrightt: theme.spacing (0),  
            marginleft: theme.spacing (0)   
          }}
        >

        <Link to="/login">
          <Button 
          variant="contained" 
          color="primary" 
          sx={{ marginRight: theme.spacing(3), 
          marginTop: theme.spacing(0), 
          marginBottom: theme.spacing(0), 
          background: "#FFFFFF",
          color: "#757575", 
        }}
        >
            Login
          </Button>
        </Link>

        <Link to="/signup">
          <Button variant="outlined" 
          color="primary" 
          sx={{ 
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(0),
            background: "#76B1A6",
            color: "#ffffff",
            }}
          >
            Sign Up
          </Button>
        </Link>
        </Box>
      
        <Box sx={{ textAlign: "left"  }}>

        <motion.img
          src={logo} 
          alt="Logo" 
          style= {{ 
            maxWidth: "300px", 
            marginBottom: theme.spacing(40), 
            marginTop: theme.spacing(0), 
            marginLeft: theme.spacing(15) 
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          />
          
          <motion.img
            src={plane} 
            alt="plane" 
            style={{ 
              maxWidth: "200px", 
              marginBottom: theme.spacing(35), 
              marginTop: theme.spacing(0), 
              marginLeft: theme.spacing(20) 
            }} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }} 
          />

          <Typography 
            variant="h3" 
            sx={{ 
              color: "#fff", 
              fontWeight:"bold", 
              marginLeft: theme.spacing(14), 
              marginTop: theme.spacing(-25),
            }}
          >
            Work the Way <br />
            That Works for You
          </Typography>

          <motion.img
            src={row}
            alt="row"
            style={{
              maxWidth: "50px",
              marginBottom: theme.spacing(4),
              marginTop: theme.spacing(0),
              marginLeft: theme.spacing(70)
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />


          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
          >
            <Divider
              sx={{
                marginTop: "-30px",
                marginBottom: "80px",
                backgroundColor: "#3ADAD9",
                height: "5px",
                width: "50px",
                borderRadius: "5px",
                marginLeft: theme.spacing(14)
              }}
            />
          </motion.div>


          <motion.div whileHover={{ scale: 1.1 }}>
            <img 
              src={deco1}  
              alt="deco1" 
              style={{ 
                maxWidth: "280px", 
                marginBottom: theme.spacing(0), 
                marginTop: theme.spacing(-30), 
                marginLeft: theme.spacing(87) 
              }} 
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <img 
              src={deco2} 
              alt="deco2" 
              style={{ 
                maxWidth: "260px", 
                marginBottom: theme.spacing(0), 
                marginTop: theme.spacing(2), 
                marginLeft: theme.spacing(147) 
              }} 
            />
          </motion.div>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#fff", 
              marginTop: theme.spacing(-40), 
              marginBottom: theme.spacing(2),  
              marginLeft: theme.spacing(14) 
            }}
          >
            The online dashboard to manage your tasks 
            <br />and supervise your progress
          </Typography>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
          >
            <Link to="/login">
              <Button 
              variant="contained" 
              color="secondary"  
              sx={{ 
                  marginTop: theme.spacing(2),
                  marginTop: "20px",
                  background: "#FFFFFF",
                  color: "#000000",
                  marginLeft: theme.spacing(14),
                  marginBottom: theme.spacing(35),
                }} 
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </Box>

        <Box sx={{ 
          textAlign: "left", 
          paddingTop:"0px", 
          marginLeft: theme.spacing(80) 
          }}
        >
          
        <Typography variant="h4" sx={{ marginBottom: "18px", fontWeight:"Bold"}}>
        Why do you need 
        <br />task management?
        </Typography>

        
        <Typography variant="h6">
        Do you waste time organizing sticky notes, searching your emails
        and apps for to dos, <br /> and figuring out what to work on first?
        Then you need one solution to prioritize your tasks, <br /> manage your time and 
        meet your deadlines.
        </Typography>

        </Box>
      </Box> 
    </Box>   
  );
};

export default GetStarted;
