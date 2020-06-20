import { Avatar, Grid, makeStyles } from "@material-ui/core";
import {
  AccountBalance,
  AccountBalanceWallet,
  AcUnit,
  AssignmentInd,
  CreditCard,
  Home,
  KeyboardBackspace,
  Settings as SettingsIcon,
  TableChart,
} from "@material-ui/icons";
import React from "react";
import { svg } from "../../../../assets";
import { Broker, CreditCardHistory, Settings } from "./";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  username: {
    fontSize: "1.8rem",
  },
  grey: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: "#888",
    fontSize: "1.3rem",
  },
  sideBar: {
    background: "#272b39",
    boxShadow: "0 0 2rem #151515",
    height: "100vh",
    zIndex: 2,
  },
  tab: {
    background: "#21252f",
    height: "100vh",
    position: "relative",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    textAlign: "center",
    padding: "4rem 0 0",
    transition: "all 650ms ease",
  },
  item: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "flex",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    flexDirection: "row",
    alignItems: "center",
    color: "#999",
    width: "100%",
    paddingLeft: "3rem",
    borderLeft: ".3rem solid transparent",
    "&:focus": {
      background: "rgba(255,2555,255,.05)",
      borderLeft: ".3rem solid var(--mint)",
      color: "var(--mint)",
    },
    "&:active": {
      background: "rgba(255,2555,255,.05)",
      borderLeft: ".3rem solid var(--mint)",
      color: "var(--mint)",
    },
    "&:hover": {
      background: "rgba(255,2555,255,.05)",
      borderLeft: ".3rem solid var(--mint)",
    },
  },
  col: {
    position: "relative",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "all 650ms ease",
  },
  center: {
    height: "100vh",
    backgroundColor: "#21252f",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  fullScreen: {
    height: "100vh",
  },
  homeBroker: {
    position: "fixed",
    margin: "auto",
    bottom: "5.5rem",
    width: "5rem",
    background: "transparent",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ".5rem",
    border: ".2rem solid var(--mint)",
    "&:hover": {
      bottom: "5.8rem",
      boxShadow: "0 .2rem .2rem var(--mint)",
    },
  },
  icon: {
    fontSize: "3rem",
  },
  sideIcon: {
    marginRight: "2rem",
  },
  homeIcon: {
    color: "var(--mint)",
  },
  cardIcon: {
    position: "absolute",
    color: "var(--yellow)",
    right: "2rem",
    bottom: "6rem",
  },
  card: {
    position: "absolute",
    top: "4rem",
    left: "4rem",
    backgroundImage: "linear-gradient(to right, #392F5A, var(--blue))",
    width: "30rem",
    height: "18rem",
    borderRadius: ".5rem",
    padding: "2rem",
    textAlign: "left",
    color: "#eee",
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  cardNumber: {
    fontSize: "1.8rem",
    letterSpacing: "1.4px",
  },
  cardFooter: {
    position: "absolute",
    bottom: "2rem",
  },
  expiry: {
    position: "absolute",
    bottom: "2rem",
    right: "2rem",
    fontSize: "1.4rem",
    color: "#ccc",
  },
  bankName: {
    display: "flex",
    alignItems: "center",
    color: "var(--mint)",
    fontFamily: "Kaushan Script, cursive",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hidden: {
    opacity: 0,
    transition: "opacity 650ms ease",
  },
}));

function Dashboard({
  handleClick,
  dashboard,
  container,
  name,
  setName,
  email,
  setEmail,
  setPassword,
  setBroker,
}) {
  const classes = useStyles();

  const cardNumbers = "2134 5678 9080 5";
  const userId = "02.8874.6070";

  const showTab = (id) => {
    const obj = {
      settings: (
        <Settings
          email={email}
          setEmail={setEmail}
          setName={setName}
          id={userId}
          name={name}
          setPassword={setPassword}
        />
      ),
      broker: <Broker />,
      creditCard: <CreditCardHistory />,
    };

    return obj[id];
  };

  return (
    <div style={{ backgroundColor: "#21252f", color: "#fff", height: "100vh" }}>
      <Grid container className={[classes.container, classes.fullScreen].join(" ")}>
        <Grid item xs={12} md={3} className={[classes.sideBar, classes.col].join(" ")}>
          <Avatar className={classes.avatar} src={svg.avatar}></Avatar>

          <h1 className={classes.username}>{name}</h1>
          <p className={[classes.row, classes.grey].join(" ")}>
            <AssignmentInd fontSize="large" />
            <span> - {userId}</span>
          </p>

          <button className={classes.item} id="wallet" onClick={handleClick}>
            <AccountBalanceWallet className={[classes.icon, classes.sideIcon].join(" ")} />
            Wallet
          </button>

          <button className={classes.item} id="broker" onClick={handleClick}>
            <AccountBalance
              color="inherit"
              className={[classes.icon, classes.sideIcon].join(" ")}
            />
            HomeBroker
          </button>

          <button className={classes.item} id="creditCard" onClick={handleClick}>
            <CreditCard className={[classes.icon, classes.sideIcon].join(" ")} />
            Credit Card
          </button>

          <button className={classes.item} id="settings" onClick={handleClick}>
            <SettingsIcon className={[classes.icon, classes.sideIcon].join(" ")} />
            Settings
          </button>

          <button className={classes.item} id="settings" onClick={handleClick}>
            <KeyboardBackspace className={[classes.icon, classes.sideIcon].join(" ")} />
            Log out
          </button>

          {/* <CountUp delay={1} duration={4} useEasing end={15000} /> */}
        </Grid>

        <Grid item xs={12} md={9} className={[classes.col, classes.center].join(" ")} id="info">
          <div className={[classes.card, !dashboard && classes.hidden].join(" ")}>
            <div className={[classes.bankName].join(" ")}>
              <AcUnit className={[classes.icon, classes].join(" ")} />
              &nbsp;&nbsp;<h3>AC Royal Bank</h3>
            </div>
            <TableChart className={[classes.icon, classes.cardIcon].join(" ")} />
            <div className={classes.cardFooter}>
              <p className={classes.cardNumber}>{cardNumbers}</p>
              <p style={{ fontSize: "1.4rem" }}>{name}</p>
            </div>
            <span className={classes.expiry}>25/09</span>
          </div>

          <button className={classes.homeBroker}>
            <Home className={[classes.icon, classes.homeIcon].join(" ")} />
          </button>

          <div className={[dashboard && classes.hidden, classes.tab].join(" ")}>
            {showTab(container)}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
