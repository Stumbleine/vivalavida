import { createTheme } from "@mui/material/styles";
import { green, grey, orange, red } from "@mui/material/colors";
// import ComponentsOverrides from "./ComponentsOverrides";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#38AFD1",
    },
    secondary: {
      main: "#388A9C",
    },
    background: {
      paper: "#fff",
      default: "#F4F4F4",
    },

    warning: {
      main: orange[800],
      light: orange[500],
    },
    error: {
      main: red[700],
      light: red[400],
      delete: red[200],
    },
    success: {
      main: green[700],
      light: green[400],
    },
  },
  typography: {
    fontFamily: "'Raleway', sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#38AFD1",
    },
    secondary: {
      main: "#388A9C",
    },
    background: {
      paper: "#fff",
      default: "#F4F4F4",
    },

    warning: {
      main: orange[800],
      light: orange[500],
    },
    error: {
      main: red[700],
      light: red[400],
      delete: red[200],
    },
    success: {
      main: green[700],
      light: green[400],
    },
  },
  typography: {
    fontFamily: "'Raleway', sans-serif",
  },
});

// lightTheme.components = ComponentsOverrides(lightTheme);
