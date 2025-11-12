import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8B4513", // Brown
    },
    secondary: {
      main: "#D2B48C", // Sandal
    },
    background: {
      default: "#FFF8E7", // Cream
      paper: "#FFFFFF", // White
    },
    text: {
      primary: "#4B2E05",
      secondary: "#5C4033",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h5: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          padding: "8px 16px",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D2B48C", // Sandal accent
    },
    secondary: {
      main: "#8B4513", // Brown
    },
    background: {
      default: "#1E1E1E", // Dark mode background
      paper: "#2C2C2C", // Cards
    },
    text: {
      primary: "#FFF8E7",
      secondary: "#D2B48C",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          padding: "8px 16px",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 2px 8px rgba(255,255,255,0.08)",
        },
      },
    },
  },
});
