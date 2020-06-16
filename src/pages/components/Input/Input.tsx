import { Button, FormControl, Input, makeStyles } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  row: {
    width: "60%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  col: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  username: {
    width: "90%",
    maxWidth: "45rem",
    fontSize: theme.spacing(3),
    color: theme.palette.secondary.main,
  },
  margin: {
    margin: theme.spacing(4, 0),
  },
  adornment: {
    color: "#000",
  },
  button: {
    maxWidth: "20%",
    fontSize: "1.6rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  buttonMargin: {
    marginLeft: theme.spacing(2),
  },
}));

const InputUsername = ({ setSelectedRepo = null, margin = null, row = null }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ username: "" });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    if (setSelectedRepo) setSelectedRepo(null);
    history.push("/github/" + values.username);
  }, [history, setSelectedRepo, values.username]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSubmit]);

  return (
    <FormControl variant="standard" className={[row ? classes.row : classes.col].join(" ")}>
      <Input
        id="adornment-amount"
        color="secondary"
        value={values.username}
        onChange={handleChange("username")}
        startAdornment={<span className={classes.adornment}>github/</span>}
        className={[classes.username, margin && classes.margin].join(" ")}
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        color="secondary"
        className={[classes.button, row && classes.buttonMargin].join(" ")}
      >
        submit
      </Button>
    </FormControl>
  );
};

export default React.memo(InputUsername);
