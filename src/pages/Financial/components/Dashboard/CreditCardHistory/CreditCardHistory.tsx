import { makeStyles } from "@material-ui/core";
import React from "react";
import { ExpensesSeries } from "../../../data";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    fontSize: "1.6rem",
    minWidth: "35rem",
    width: "40%",
  },
  button: {
    padding: theme.spacing(0, 3),
    borderRadius: ".5rem",
    fontSize: "1.4rem",
  },
  row: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
  },
  between: {
    justifyContent: "space-between",
  },
  listItem: {
    padding: theme.spacing(1, 1),
    borderBottom: ".1rem solid #555",
    "&:hover": {
      background: "rgba(255,255,255,.02)",
    },
  },
  group: {
    textAlign: "left",
    fontSize: "1.4rem",
    margin: "2rem 0",
  },
  payments: {
    color: theme.palette.secondary.main,
  },
  history: {
    margin: "0 auto",
    width: "100%",
    minWidth: "36rem",
  },
}));

const CreditCardHistory: React.FC<{ expenses: ExpensesSeries }> = ({ expenses }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={[classes.row, classes.between].join(" ")}>
        <h2 style={{ marginBottom: "2rem" }}>Expenses</h2>
        <button className={classes.button}>Print bank statement</button>
      </div>

      <div className={classes.history}>
        {expenses.map((total) =>
          total.data.map((date) => (
            <div key={date.x} className={classes.group}>
              {date.x}
              {date.y.map((payment) => (
                <div className={classes.col}>
                  <div
                    key={payment[0] + payment[1]}
                    className={[classes.row, classes.listItem, classes.between].join(" ")}
                  >
                    <span>{payment[0]}</span>
                    <span className={classes.payments}>{payment[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CreditCardHistory;
