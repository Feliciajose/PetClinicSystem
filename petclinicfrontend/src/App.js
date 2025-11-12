import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Pets from "./pages/Pets";
import Owners from "./pages/Owners";
import Appointments from "./pages/Appointments";

const App = () => {
  // ✅ Define darkMode state
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Define the function that toggles it
  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        {/* ✅ Pass props to Navbar */}
        <Navbar darkMode={darkMode} onThemeToggle={handleThemeToggle} />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
