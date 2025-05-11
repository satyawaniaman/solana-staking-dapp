import { ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#14F195",
      light: "#4df7af",
      dark: "#0ba76a",
    },
    secondary: {
      main: "#9945FF",
      light: "#b775ff",
      dark: "#7a31d4",
    },
    background: {
      default: "#0F1624",
      paper: "#161B29",
    },
    text: {
      primary: "#ffffff",
      secondary: "#c1c1d1",
    },
    action: {
      active: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Manrope, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 20px",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "none",
          ":hover": {
            boxShadow: "0px 8px 23px rgba(20, 241, 149, 0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
          },
        },
      },
    },
  },
};

export default theme;
