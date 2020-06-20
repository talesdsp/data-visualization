import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    fontSize: "1.6rem",
    width: "90%",
  },
  button: {
    padding: theme.spacing(0, 3),
    borderRadius: ".5rem",
    fontSize: "1.4rem",
  },
  row: {
    display: "flex",
    alignItems: "center",
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
    verticalAlign: "middle",
  },
  payments: {
    color: theme.palette.secondary.main,
  },
  history: {
    overflow: "auto",
    height: "80vh",
  },
}));

const mockHistory: Record<string, [string, number][]> = {
  "19-09": [["Joel Dentist", 105.8]],
  "18-09": [
    ["Uber", 21.44],
    ["Mechanic", 300.9],
    ["Uber", 26.44],
    ["BestFoods.co", 90.7],
  ],
  "16-09": [
    ["Uber", 18],
    ["Hairdresser", 123.9],
    ["Uber", 22.13],
    ["Grandma apple pies", 33.7],
    ["BakerMasters", 10.2],
  ],
  "16-119": [
    ["Uber", 18],
    ["Hairdresser", 123.9],
    ["Uber", 22.13],
    ["Grandma apple pies", 33.7],
    ["BakerMasters", 10.2],
  ],
  "16-0": [
    ["Uber", 18],
    ["Hairdresser", 123.9],
    ["Uber", 22.13],
    ["Grandma apple pies", 33.7],
    ["BakerMasters", 10.2],
  ],
  "16-019": [
    ["Uber", 18],
    ["Hairdresser", 123.9],
    ["Uber", 22.13],
    ["Grandma apple pies", 33.7],
    ["BakerMasters", 10.2],
  ],
};

const CreditCardHistory = () => {
  const classes = useStyles();
  console.log(Object.entries(mockHistory));

  return (
    <Container maxWidth="sm">
      <div className={[classes.row, classes.between].join(" ")}>
        <h2 style={{ marginBottom: "2rem" }}>Expenses</h2>
        <button className={classes.button}>Print bank statement</button>
      </div>

      <div className={classes.history}>
        {Object.entries(mockHistory).map((date) => (
          <div key={date[0]} className={classes.group}>
            {date[0]}
            <div className={classes.col}>
              {date[1].map((payment) => (
                <div
                  key={payment[0] + payment[1]}
                  className={[classes.row, classes.listItem, classes.between].join(" ")}
                >
                  <span>{payment[0]}</span>
                  <span className={classes.payments}>{payment[1]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CreditCardHistory;
