import { Avatar, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Explore, Folder, Link, People } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
    maxWidth: "100%",
    marginBottom: theme.spacing(6),
  },
  col: {
    backgroundColor: "#fff",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    borderRadius: theme.spacing(3),
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
  },
  anchor: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    textAlign: "center",
    marginLeft: theme.spacing(0),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  icons: {
    marginLeft: theme.spacing(2),
    fontSize: theme.spacing(2),
    justifyContent: "center",
    verticalAlign: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  icon: { fontSize: theme.spacing(3), color: theme.palette.primary.main },
  margin: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
    height: "120px",
  },
  notProvided: {
    color: "#aaa",
  },
}));

const UserSection = ({ user: { data, isLoading } }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="md" className={classes.col}>
        <a
          href={data.html_url || "#"}
          title="see on github"
          target="_blank"
          rel="noopener noreferrer"
        >
          {(
            <Avatar
              src={data.avatar_url || data.gravatar_id}
              alt={"github profile picture"}
              className={classes.avatar}
            />
          ) || <Skeleton color="#eee" animation="wave" variant="circle" width={144} height={144} />}
        </a>

        <Grid container direction="row" spacing={2} className={classes.margin}>
          {/* ! ROW1 */}
          <Grid item xs={12} md={4} />

          <Grid item xs={12} md={4}>
            <Typography align="center" variant="h3">
              {isLoading ? <Skeleton variant="text" /> : data.name || data.login}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={[classes.row, classes.icons].join(" ")}>
              <span className={classes.icons}>
                <Folder
                  titleAccess="repositories"
                  className={classes.icon}
                  style={{ marginBottom: "-.5rem" }}
                />
                {data?.public_repos || 0}
              </span>
              <span className={classes.icons}>
                <People
                  titleAccess="followers"
                  className={classes.icon}
                  style={{ marginBottom: "-.5rem" }}
                />
                {data?.followers || 0}
              </span>
            </div>
          </Grid>
          {/* ! END ROW 1 */}

          {/* ! ROW 2 */}
          <Grid item xs={12} md={3} />

          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" style={{ marginBottom: "2rem" }}>
              {isLoading ? (
                <>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width={"50%"} style={{ margin: "auto" }} />
                </>
              ) : (
                data.bio || <span className={classes.notProvided}>No bio provided</span>
              )}
            </Typography>

            <span className={[classes.row, classes.icons].join(" ")}>
              {data?.location && (
                <>
                  <Explore titleAccess="location" className={classes.icon} />
                  {data.location}
                </>
              )}
            </span>

            <div className={[classes.row, classes.icons].join(" ")}>
              <a
                href={data?.blog}
                target="_blank"
                rel="noopener noreferrer"
                className={[classes.row, classes.icons, classes.anchor].join(" ")}
              >
                <Link titleAccess="blog" className={classes.icon} />
                &nbsp;
                {isLoading ? (
                  <Skeleton variant="text" width={120} />
                ) : (
                  data.blog || <span className={classes.notProvided}>No blog provided</span>
                )}
              </a>
            </div>
          </Grid>

          <Grid item xs={12} md={3} />
          {/* ! END ROW 2 */}
        </Grid>
      </Container>
    </div>
  );
};
export default UserSection;
