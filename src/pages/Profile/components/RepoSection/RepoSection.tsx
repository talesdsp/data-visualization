import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import React, { useState } from "react";
import { BarChart, PieChart, SelectRepo } from "./index";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  grid: {
    flexDirection: "row",
    justifyContent: "center",
    padding: theme.spacing(6, 0),
  },
  chart: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50rem",
    margin: "auto",
  },
  pie: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30rem",
    minWidth: "36rem",
    margin: "auto",
  },
  reposChart: {
    background: "#19323C",
  },
  reposDescription: {
    background: "#fff",
  },
  button: {
    position: "absolute",
    margin: "auto",
    bottom: theme.spacing(3),
    fontSize: "1.6rem",
    fontWeight: "bold",
  },
  menu: {
    position: "relative",
  },
  anchor: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
}));

const RepoSection = ({ repos, languages, selectedRepo, setSelectedRepo }) => {
  const classes = useStyles();

  const [pieChart, setPie] = useState(true);

  const Description = () => (
    <Grid
      item
      xs={12}
      md={6}
      direction="column"
      className={[classes.chart, classes.reposDescription].join(" ")}
    >
      <div className={classes.row}>
        <Typography variant="h4" style={{ marginRight: "2rem" }}>
          {selectedRepo.name || <Skeleton variant="text" animation="wave" />}
        </Typography>
        <Star />
        <span>{selectedRepo.stargazers_count}</span>
      </div>

      <p style={{ textAlign: "center", margin: "20px auto" }}>{selectedRepo.description}</p>
      <a href={selectedRepo.html_url} className={classes.anchor}>
        {selectedRepo.html_url}
      </a>
    </Grid>
  );

  const Charts = () => (
    <Grid item xs={12} md={6} className={[classes.chart, classes.reposChart].join(" ")}>
      <div className={classes.pie}>
        {pieChart
          ? (languages.data && <PieChart data={languages.data} />) || (
              <Skeleton animation="wave" variant="circle" />
            )
          : (languages.data && <BarChart data={languages.data} />) || (
              <Skeleton animation="wave" variant="rect" />
            )}
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setPie((prev) => !prev)}
        className={classes.button}
      >
        {pieChart ? "Bar" : "Pie"} chart
      </Button>
    </Grid>
  );

  return (
    <>
      <SelectRepo
        repos={repos.data}
        selectedRepo={selectedRepo}
        setSelectedRepo={setSelectedRepo}
      />

      <Grid container spacing={4} className={[classes.grid].join(" ")}>
        {selectedRepo ? (
          <>
            <Description />
            <Charts />
          </>
        ) : (
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              height: "3rem",
              width: "80%",
              borderRadius: ".3rem",
            }}
          >
            --- Select Repo to show ---
          </div>
        )}
      </Grid>
    </>
  );
};

export default RepoSection;
