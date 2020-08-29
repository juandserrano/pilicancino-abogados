import React from "react";
import { Box, Grid, AppBar, Toolbar, IconButton, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Stars from "./Stars";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "rgba(250,250,250,0.3)",
    borderRadius: "20px",
    padding: "20px",
  },
  mainContainer: {
    margin: "20px",
  },
}));

const Calificacion = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Grid container justify="center">
        <Grid item>
          <Paper className={classes.paper}>
            <Grid container item justify="center">
              <Stars />
            </Grid>
            <Typography variant="h5">Nombre</Typography>
            <Typography variant="body1">
              Esse pariatur mollit sunt sint tempor. Quis aliqua cupidatat labore labore. Labore dolor ea culpa consectetur. Occaecat voluptate culpa
              eiusmod officia et aliquip incididunt.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calificacion;
