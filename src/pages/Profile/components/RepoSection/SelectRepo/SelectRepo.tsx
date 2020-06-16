import { FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  container: {
    maxWidth: "36rem",
    fontSize: "1.6rem",
    margin: "auto",
  },
  select: {},

  fork: {
    border: `.1rem solid ${theme.palette.primary.light}`,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    color: theme.palette.primary.light,
    fontSize: "1rem",
    position: "absolute",
    bottom: theme.spacing(0),
    right: theme.spacing(0),
  },
}));

const SelectRepo = ({ repos, selectedRepo, setSelectedRepo }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="select-repo" style={{ fontSize: "1.6rem" }}>
            Repo
          </InputLabel>
          <Select
            onChange={(event) => setSelectedRepo(event.target.value)}
            value={selectedRepo?.name}
            label="Repo"
            color={"primary"}
            style={{ fontSize: "1.6rem" }}
            variant="outlined"
            className={classes.select}
            inputProps={{
              name: "repos",
              id: "select-repo",
            }}
          >
            {repos?.map((option) => (
              <MenuItem
                key={option.name}
                value={option}
                style={{ borderBottom: ".1rem solid #aaa" }}
              >
                {option.name}

                {option.fork ? <span className={classes.fork}>fork</span> : []}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default React.memo(SelectRepo);
