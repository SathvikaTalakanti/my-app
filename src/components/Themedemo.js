import React from 'react'
import { Button, Typography } from "@material-ui/core";
import { makeStyles} from '@material-ui/core';
const useStyles =makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6888 20%, #FF8E53 90%)',
        height: "100vh"
    }
});
const Themedemo = () => {
    const classes =useStyles();
  return (
    <div className={classes.root}>

      <Button  color="primary" variant ="contained">
          This is Button
       </Button>
       <br></br>
       <br></br>
       <Typography variant="h3">This is my Typograpghy</Typography>

    </div>
  )
}

export default Themedemo
