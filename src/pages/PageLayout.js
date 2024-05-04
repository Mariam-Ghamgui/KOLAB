import React from "react";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "../theme";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";

function PageLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex">
        <SideMenu />
        <Box flexGrow={1}>
          <TopBar />
          <main>{children}</main>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default PageLayout;
