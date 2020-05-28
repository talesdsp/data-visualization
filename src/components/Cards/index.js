import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import cx from "classnames";
import React from "react";
import CountUp from "react-countup";
import styles from "./index.module.css";

export default function Cards({ data }) {
  if (!data) {
    return <div className={styles.container}>Loading</div>;
  }

  const { confirmed, lastUpdate, deaths, recovered } = data;

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>

            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2} separator="," />
            </Typography>

            <Typography variant="body2">Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>

            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2} separator="," />
            </Typography>

            <Typography variant="body2">Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>

            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2} separator="," />
            </Typography>

            <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>

      <div className={styles.text}>
        <Typography align="left" color="textSecondary">
          Last updated: {new Date(lastUpdate).toLocaleDateString()}
        </Typography>
      </div>
    </div>
  );
}
