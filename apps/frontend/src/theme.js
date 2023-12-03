import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(219,106,7)",
      text: "rgb(150, 100, 50)",
      background: "rgba(221, 206, 206, 0.8)",
    },
    error: {
      main: red.A400,
    },
    button: {
      background: "rgb(219, 106, 7)",
      text: "rgb(127, 81, 50)",
      hoverBackground: "rgb(249, 143, 7)",
    },
  },
});

export default theme;
