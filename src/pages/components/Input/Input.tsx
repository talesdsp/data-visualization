import { Button, FormControl, Input, makeStyles } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  row: {
    width: "60%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    margin: theme.spacing(4, 0),
    fontSize: theme.spacing(3),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
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
}));

const InputUsername = ({ row = null }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ username: "" });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push("/github/" + values.username);
  }, [history, values.username]);

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
    <FormControl variant="standard" className={row ? classes.row : classes.col}>
      <Input
        id="adornment-amount"
        color="secondary"
        value={values.username}
        onChange={handleChange("username")}
        startAdornment={<span className={classes.adornment}>github/</span>}
        className={classes.username}
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        submit
      </Button>
    </FormControl>
  );
};

export default InputUsername;
