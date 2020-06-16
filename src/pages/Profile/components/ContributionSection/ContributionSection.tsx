import { makeStyles } from "@material-ui/core";
import React from "react";
import GithubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "70rem",
    width: "100%",
    minHeight: "30rem",
    height: "100vh",
    margin: "auto",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  highlight: {
    textDecoration: "underline",
    fontWeight: "bold",
  },
}));

function ContributionSection({ username }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GithubCalendar username={username}>
        <ReactTooltip delayShow={50} html />
      </GithubCalendar>
    </div>
  );
}

export default ContributionSection;
