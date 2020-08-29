import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "react-rating";
import { faStar, faPoo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  estrellas: {
    fontSize: "30px",
    textShadow: "-1px 1px 0 #000",
  },
});
const starFull = <FontAwesomeIcon style={{ color: "gold" }} icon={faStar} />;
const starEmpty = <FontAwesomeIcon style={{ color: "lightGrey" }} icon={faStar} />;

const Stars = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container>
        <Rating className={classes.estrellas} emptySymbol={starEmpty} fullSymbol={starFull} />
      </Grid>
    </Box>
  );
};

export default Stars;
