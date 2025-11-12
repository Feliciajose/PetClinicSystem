import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";

// Material Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PetsIcon from "@mui/icons-material/Pets";
import PeopleIcon from "@mui/icons-material/People";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import pawLogo from "../pawLogo.jpg";

const Navbar = ({ darkMode, onThemeToggle }) => {
  return (
    <AppBar
      position="static"
      color="primary"
      elevation={4}
      sx={{
        backgroundColor: "#8B4513", // Brown theme color
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section — Logo + Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src={pawLogo}
            alt="Pet Clinic Logo"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "10px",
              backgroundColor: "#FFF8E7",
              padding: "3px",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#FFF8E7",
              letterSpacing: "0.5px",
            }}
          >
            Pet Clinic System
          </Typography>
        </Box>

        {/* Right Section — Navigation Buttons + Theme Toggle */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            color="inherit"
            href="/"
            startIcon={<DashboardIcon />}
            sx={{ textTransform: "none", fontWeight: 500 }}
          >
            Dashboard
          </Button>

          <Button
            color="inherit"
            href="/pets"
            startIcon={<PetsIcon />}
            sx={{ textTransform: "none", fontWeight: 500 }}
          >
            Pets
          </Button>

          <Button
            color="inherit"
            href="/owners"
            startIcon={<PeopleIcon />}
            sx={{ textTransform: "none", fontWeight: 500 }}
          >
            Owners
          </Button>

          <Button
            color="inherit"
            href="/appointments"
            startIcon={<EventNoteIcon />}
            sx={{ textTransform: "none", fontWeight: 500 }}
          >
            Appointments
          </Button>

          {/* Theme Toggle Icon */}
          <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
            <IconButton onClick={onThemeToggle} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;