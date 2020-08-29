import React from "react";
import { Box, Grid, Typography, Button, TextField } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { ContactMail, ContactPhone, Send } from "@material-ui/icons";
import logo from "../images/logo2.png";

const useStyles = makeStyles({
  form: {
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // position: "absolute",
    background: "rgba(200,200,200,0.6)",
    padding: 30,
    borderRadius: 20,
    width: "95%",
    maxWidth: 500,
    boxShadow: "2px 2px 2px black",
  },
  mainDiv: {
    height: "100%",
  },
  mainGrid: {
    marginTop: 100,
  },
  button: {
    color: "blue",
    borderColor: "blue",
    margin: "20px auto 0px auto",
    boxShadow: "2px 2px 2px black",
  },
  header: {
    color: "grey",
    textShadow: "1px 1px 1px black",
    marginBottom: 10,
    textAlign: "center",
  },
});

const Contacto = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainDiv}>
      <Grid container direction="column" alignItems="center">
        <Grid item container justify="center" style={{ marginTop: "20px", marginBottom: "20px" }}>
          <img height="150px" src={logo} alt="Logo" />
        </Grid>
        <Grid container component="form" direction="column" alignItems="center" justify="center" className={classes.form}>
          <Grid item>
            <Typography className={classes.header} variant="h3">
              Contacto:
            </Typography>
          </Grid>
          <Grid item>
            <TextField fullWidth={false} label="Nombre" variant="outlined" margin="dense" size="medium" />
            <br />
          </Grid>
          <Grid item>
            <TextField fullWidth={false} label="Email" variant="outlined" margin="dense" size="medium" />
            <br />
          </Grid>
          <Grid item>
            <TextField fullWidth={false} label="Compañia" variant="outlined" margin="dense" size="medium" />
            <br />
          </Grid>
          <Grid item>
            <Button variant="contained" fullWidth={false} endIcon={<Send />} className={classes.button}>
              Contactanos
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacto;
