import { createTheme } from "@mui/material/styles";
import { green, grey, orange, red } from "@mui/material/colors";
// import ComponentsOverrides from "./ComponentsOverrides";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#181818",
    },
    secondary: {
      main: "#7B818A",
    },
    terciary: {
      main: "#EEF2F7",
    },
    background: {
      paper: "#fff",
      default: "#F5F5F5",
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
    fontFamily: "'Poppins', sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EEF2F7",
    },
    secondary: {
      main: "#181818",
    },
    terciary: {
      main: "#7B818A",
    },
    background: {
      paper: "#fff",
      default: "#181818",
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
    fontFamily: "'Poppins', sans-serif",
  },
});

// lightTheme.components = ComponentsOverrides(lightTheme);
