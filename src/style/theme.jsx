import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import brown from "@material-ui/core/colors/brown";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: blueGrey[100],
      main: blueGrey[500],
      dark: blueGrey[900],
    },
    secondary: {
      light: brown[300],
      main: brown[500],
      dark: brown[900],
    }
  }
});

export default theme;
