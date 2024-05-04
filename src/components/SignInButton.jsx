import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Box, Grid} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {InlineIcon } from "@iconify/react";
import { Icon } from '@iconify/react';


const SignInButton = ({ setAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      console.log("submitting...");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("submitted!!");
      setAuth(true);
      navigate(from, { replace: true });
    },
  });

  const { isSubmitting, handleSubmit } = formik;

  return (
    <Box display="flex" justifyContent="space-between">
      <Grid item xs={6}>
        <LoadingButton
          color='secondary'
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          onClick={handleSubmit}
          sx={{
            background: "#76B1A6",
            boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
            borderRadius: "10px",
            color: "#ffffff",
            typography: {
              fontSize: "11px",
            },
          }}
        >
          <InlineIcon icon="logos:google-icon" fontSize="18px" style={{ marginRight: "8px" }} />
          {isSubmitting ? "Loading..." : "Sign in with Google"}
        </LoadingButton>
      </Grid>
      <Grid item xs={6}>
        <LoadingButton
          color='secondary'
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          onClick={handleSubmit}
          sx={{
            background: "#76B1A6",
            boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
            borderRadius: "10px",
            color: "#ffffff",
            typography: {
              fontSize: "11px",
            },
          }}
        >
          <InlineIcon  icon="logos:facebook" fontSize="18" style={{ marginRight: "8px" }} />
          {isSubmitting ? "Loading..." : "Sign in with Facebook"}
        </LoadingButton>
      </Grid>
    </Box>
  );
};

export default SignInButton;
