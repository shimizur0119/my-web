import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import pic1 from "../../pic/logo_ver1.png";
import gif1 from "../../pic/boxs.gif";

import useStyle from "../../style/index";

const Home = () => {
  const classes = useStyle();
  return (
    <Box>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Box
            borderRadius={`borderRadius`}
            className={classes.opacity}
            boxShadow={20}
            p={3}
            bgcolor="primary.main"
          >
            <Typography variant="h1" children="hello world!!" />
          </Box>
        </Grid>
        <Grid item>
          <Box
            className={classes.opacity}
            borderRadius={`borderRadius`}
            boxShadow={20}
            p={3}
            bgcolor="secondary.main"
            width={1}
          >
            <Typography variant="h1" children="hello world!!" />
          </Box>
        </Grid>
        <Grid item>
          <Box
            className={classes.opacity}
            borderRadius={`borderRadius`}
            boxShadow={20}
            p={3}
            bgcolor="secondary.dark"
            width={1}
          >
            <Typography variant="h1" children="hello world!!" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
