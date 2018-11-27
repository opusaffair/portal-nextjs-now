import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1c1c1c",
      light: "#434343",
      dark: "#000000",
      contrastText: "#fff"
    },
    secondary: {
      main: "#f33f3f",
      light: "#ff766a",
      dark: "#b90017",
      contrastText: "#000"
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Roboto Condensed"].join(","),
    useNextVariants: true
  }
});

export default theme;

// primary: {
//   main: "#42404d",
//   light: "#4e5763",
//   dark: "#171f2a",
//   contrastText: "#fff"
// },
// secondary: {
//   main: "#51bc9a",
//   light: "#73c9ae",
//   dark: "#38836b",
//   contrastText: "#000"
// }
