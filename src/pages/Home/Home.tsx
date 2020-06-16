import { Container, Link, makeStyles, Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import React from "react";
import { Input } from "../components";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "absolute",
    top: 0,
    maxWidth: "90%",
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(4, 0),
    borderRadius: theme.spacing(3),
  },

  github: { fontSize: theme.spacing(6) },
}));

function Home({ history }) {
  const classes = useStyles();

  return (
    <>
      {/* <div className={classes.nav}>

    </div> */}
      <div className={classes.wrapper}>
        <Container maxWidth="md" className={classes.container}>
          <Typography variant="h2" align="center" component="h1">
            Type your <GitHub className={classes.github} titleAccess="github" /> username
          </Typography>

          <Input margin />

          <Typography align="center" variant="h6" component="p" style={{ fontWeight: "bold" }}>
            Don't have an account?{" "}
            <Link underline="always" color="secondary" href={"/github/talesdsp"}>
              Use mine
            </Link>
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default Home;
