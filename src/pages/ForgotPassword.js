import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box} from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import SignInButton from "../components/SignInButton";


const RootStyle = styled("div")({

  height: "100vh",
  display: "grid",
  placeItems: "center",
});


const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = ({ setAuth }) => {
  return (
    <>
      <Navbar />
      <RootStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <HeadingStyle component={motion.div} {...fadeInUp}>
              <Typography 
                variant="h5"
              sx={{ 
                color: "text.primary", 
                fontWeight: "bold",
                textAlign: "left",
                mb: 5,
                }}>
                Sign in
              </Typography>
            </HeadingStyle>

            

            <LoginForm setAuth={setAuth} />

            <Typography
              component={motion.p}
              {...fadeInUp}
              variant="body2"
              align="center"
              sx={{ mt: 3 }}
            >
              Don’t have an account?{" "} <br />
              <Link 
              variant="subtitle2" 
              component={RouterLink} 
              to="/signup" 
              color="#465F85"
              sx={{ textDecoration: "none", fontWeight: "bold"}}>
                SIGN UP
              </Link>
            </Typography>
            
            <Box sx={{ my: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ height: "24px", width: "1px", bgcolor: "#9D9EA0" }} />
              <Typography variant="body2" sx={{ color: "text.primary", my: 1 }}>
                Or
              </Typography>
              <Box sx={{ height: "24px", width: "1px", bgcolor: "#9D9EA0" }} />
            </Box>
            <SignInButton />
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
};

export default Login;
