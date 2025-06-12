import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#DC8BE0",
    },
    secondary: {
      main: "#64E2B7",
    },
    error: {
      main: "#D50B8B",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;