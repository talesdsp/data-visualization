import { Button, makeStyles } from "@material-ui/core"
import React from "react"
import { ExpensesSeries } from "../../../data"

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
    color: "#ccc",
    padding: theme.spacing(1, 1),
    borderBottom: ".1rem solid var(--purple)",
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
    color: "red",
  },
  history: {
    margin: "0 auto",
    width: "100%",
    minWidth: "36rem",
  },
  date: {
    color: "var(--blue)",
  },
}))

const CreditCardHistory: React.FC<{ expenses: ExpensesSeries }> = ({ expenses }) => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={[classes.row, classes.between].join(" ")}>
        <h2 style={{ marginBottom: "2rem" }}>Expenses</h2>
        <Button variant="contained" className={classes.button}>
          Print bank statement
        </Button>
      </div>

      <div className={classes.history}>
        {expenses.map((chart) =>
          chart.data.map((day) => (
            <div key={day.x.toDateString()} className={classes.group}>
              <span className={classes.date}>{day.x.toDateString()}</span>
              {day.y.map((payment) => (
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
  )
}

export default CreditCardHistory
