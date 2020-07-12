import { Grid } from "@material-ui/core"
import React from "react"
import { CandleStick, ControlPanel } from "."

const HomeBroker = ({
  chart,
  emaEl,
  smaEl,
  toggleEMA,
  toggleSMA,
  bollingerEl,
  toggleBollinger,
}) => {
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} md={6}>
        <CandleStick chart={chart} />
      </Grid>
      <Grid item xs={12} md={3}>
        <ControlPanel
          bollingerEl={bollingerEl}
          toggleBollinger={toggleBollinger}
          emaEl={emaEl}
          smaEl={smaEl}
          toggleEMA={toggleEMA}
          toggleSMA={toggleSMA}
        />
      </Grid>
    </Grid>
  )
}

export default HomeBroker
