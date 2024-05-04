import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, Outlet } from "react-router-dom";
import theme from "./theme"; // Import your theme
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import PageLayout from "./pages/PageLayout";
import Signup from "./pages/Signup";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />

        <Route
          path="/"
          element={
            auth ? (
              <PageLayout>
                
              </PageLayout>
            ) : (
              <LandingPage />
            )
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
