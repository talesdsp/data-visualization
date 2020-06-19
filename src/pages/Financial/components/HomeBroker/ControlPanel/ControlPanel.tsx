import { Button, Input, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avg: {
    color: "#fff",
    fontSize: "1.6rem",
    width: "5rem",
  },
});

const ControlPanel = ({ smaEl, emaEl, toggleEMA, toggleSMA }) => {
  const classes = useStyles();

  return (
    <div className={classes.row}>
      <span>
        <Input
          placeholder="20"
          color="primary"
          inputRef={smaEl}
          type="text"
          className={classes.avg}
        />
        <Button variant="contained" color="secondary" onClick={toggleSMA}>
          SMA
        </Button>
      </span>
      <span>
        <Input
          placeholder="5"
          inputRef={emaEl}
          color="primary"
          type="text"
          className={classes.avg}
        />
        <Button variant="contained" color="primary" onClick={toggleEMA}>
          EMA
        </Button>
      </span>
    </div>
  );
};

export default ControlPanel;
