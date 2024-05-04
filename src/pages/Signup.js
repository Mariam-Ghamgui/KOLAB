import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box} from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import SignupForm from "../components/SignupForm";
import Navbar from "../components/NavBar";
import SignInButton from "../components/SignInButton";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
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
    y: 40,
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

const Signup = ({ setAuth }) => {
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
                  color: "#465F85", 
                  fontWeight: "bold",
                  textAlign: "left",
                  mb: 5,
                  }}>
                  Sign up
                </Typography>
            </HeadingStyle>


            <SignupForm setAuth={setAuth} />

            

            <Typography
              component={motion.p}
              {...fadeInUp}
              variant="body2"
              align="center"
              sx={{ mt: 3 }}
            >
              Have an account?{" "} <br />
              <Box mt={1}>
        <Link
          variant="subtitle2"
          component={RouterLink}
          to="/login"
          color="#465F85"
          sx={{ textDecoration: "none", fontWeight: "bold" }}
        >
          Login
        </Link>
      </Box>

      <Box mt={2}>
        <SignInButton />
      </Box>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
};

export default Signup;
