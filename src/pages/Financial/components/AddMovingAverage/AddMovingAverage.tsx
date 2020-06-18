import { Button } from "@material-ui/core";
import React from "react";

const AddMovingAverage = ({ smaEl, emaEl, toggleEMA, toggleSMA }) => {
  return (
    <>
      <input ref={smaEl} type="text" />
      <Button variant="contained" color="secondary" onClick={toggleSMA}>
        SMA
      </Button>
      <input ref={emaEl} type="text" />
      <Button variant="contained" color="primary" onClick={toggleEMA}>
        EMA
      </Button>
    </>
  );
};

export default AddMovingAverage;
