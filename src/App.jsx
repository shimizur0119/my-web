import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./style/theme";

// material-ui
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// my component
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Body from "./component/body";

import useStyle from "./style/index";

const App = () => {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.bgimg}>
        <BrowserRouter>
          <Header title="Shimizu's web site" />
          <Body />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
