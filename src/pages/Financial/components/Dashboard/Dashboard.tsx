import { Grow, makeStyles } from "@material-ui/core"
import {
  AccountBalance,
  AccountBalanceWallet,
  AcUnit,
  CreditCard,
  KeyboardBackspace,
  Settings as SettingsIcon,
  TableChart,
} from "@material-ui/icons"
import React from "react"
import { useHistory } from "react-router-dom"
import HomeBroker from "../HomeBroker/HomeBroker"
import { CreditCardHistory, Settings } from "./"
import BalanceEvolution from "./BalanceEvolution/BalanceEvolution"
import ExpensesEvolution from "./ExpensesEvolution/ExpensesEvolution"

const useStyles = makeStyles((theme) => ({
  sideBar: {
    position: "fixed",
    top: 0,
    left: 0,
    background: "var(--grey)",
    height: "100vh",
    maxWidth: "7rem",
    zIndex: 2,
  },
  item: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    display: "flex",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    flexDirection: "row",
    alignItems: "center",
    color: "#999",
    width: "100%",
    paddingLeft: "2rem",
    borderLeft: ".3rem solid transparent",
    "&:hover": {
      background: "rgba(255,255,255,.05)",
      borderLeft: ".3rem solid var(--mint)",
    },
  },
  col: {
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
    width: "calc(100vw - 7rem)",
    marginLeft: "7rem",
    position: "absolute",
    top: 0,
    left: 0,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
    color: "#fff",
  },
  fullScreen: {
    overflowX: "hidden",
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
    position: "relative",
    backgroundImage: "linear-gradient(to right, var(--purple), var(--blue))",
    width: "30rem",
    height: "18rem",
    borderRadius: ".5rem",
    marginRight: "2rem",
    padding: "2rem",
    textAlign: "left",
    color: "#eee",
    fontWeight: "bold",
    fontFamily: "monospace",
    boxShadow: "4px 4px 10px rgba(0,0,0,.2)",
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
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  layer: {
    width: "100%",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingTop: "3rem",
    left: 0,
    top: 0,
    flex: 1,
  },
  tab: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
    margin: "auto",
    backgroundColor: "#21252f",
    flex: 1,
    minHeight: "100vh",
    textAlign: "center",
    padding: "2rem 0 0  ",
    transition: "all 650ms ease",
  },

  chart: {
    display: "block",
    minWidth: "36rem",
    backgroundColor: "var(--grey)",
    width: "100%",
    maxWidth: "38vw",
    padding: "2rem",
    boxShadow: "4px 4px 10px rgba(0,0,0,.2)",
    borderRadius: "12px",
  },
  success: {
    color: "var(--mint)",
  },
  error: {
    color: "var(--red)",
  },
  line: {
    cursor: "pointer",
    borderTop: "1px solid var(--blue)",
    borderLeft: "1px solid var(--blue)",
    borderBottom: "1px solid var(--purple)",
    borderRight: "1px solid var(--purple)",
    boxShadow: "4px 4px 10px rgba(0,0,0,.2)",
    width: "fit-content",
    backgroundColor: "var(--grey)",
    padding: "5px",
    margin: "5px 0",
    fontSize: "13px",
    borderRadius: "8px",
    transition: "all 650ms linear",
  },
}))

function Dashboard({
  handleClick,
  expenses,
  currentTab: { wallet, credit, settings, broker },

  name,
  setName,
  email,
  setEmail,
  setPassword,

  chart,
  bollingerEl,
  emaEl,
  smaEl,
  toggleEMA,
  toggleSMA,
  toggleBollinger,
}) {
  const classes = useStyles()

  const cardNumbers = "2134 5678 9080 5"
  const userId = "02.8874.6070"

  const history = useHistory()

  const navigateBack = () => {
    history.push("/")
  }

  return (
    <div className={[classes.container, classes.fullScreen].join(" ")}>
      <div className={[classes.col, classes.sideBar].join(" ")}>
        <button
          className={[classes.item, "tab-tip", "active-tab"].join(" ")}
          id="wallet"
          onClick={() => handleClick("wallet")}
        >
          <AccountBalanceWallet className={[classes.icon, classes.sideIcon].join(" ")} />
          <span>Wallet</span>
        </button>

        <button
          className={[classes.item, "tab-tip"].join(" ")}
          id="broker"
          onClick={() => handleClick("broker")}
        >
          <AccountBalance className={[classes.icon, classes.sideIcon].join(" ")} />
          <span>Home Broker</span>
        </button>

        <button
          className={[classes.item, "tab-tip"].join(" ")}
          id="creditCard"
          onClick={() => handleClick("creditCard")}
        >
          <CreditCard className={[classes.icon, classes.sideIcon].join(" ")} />
          <span>Credit Card</span>
        </button>

        <button
          className={[classes.item, "tab-tip"].join(" ")}
          id="settings"
          onClick={() => handleClick("settings")}
        >
          <SettingsIcon className={[classes.icon, classes.sideIcon].join(" ")} />
          <span>Settings</span>
        </button>

        <button className={[classes.item, "tab-tip"].join(" ")} onClick={navigateBack}>
          <KeyboardBackspace className={[classes.icon, classes.sideIcon].join(" ")} />
          <span>Log Out</span>
        </button>
      </div>

      <div className={[classes.col, classes.center].join(" ")} id="info">
        {wallet === true && (
          <Grow in={wallet}>
            <div className={[classes.tab, classes.col].join(" ")}>
              <div
                className={classes.row}
                style={{ justifyContent: "space-evenly", marginBottom: "40px" }}
              >
                <div className={[classes.card].join(" ")}>
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

                <div>
                  <p className={[classes.line].join(" ")}>
                    {"Netherlands data center market is likely to grow at a CAGR Of over 4% during the forecast period 2020-2025".substring(
                      0,
                      55
                    )}
                    ...
                  </p>
                  <p className={classes.line}>Liberland: The Country on the Blockchain</p>
                  <p className={classes.line}>Oil jumps 2% on optimism around OPEC+ output pact</p>
                  <p className={classes.line}>Japan's wholesale price fall eases in June</p>
                </div>
              </div>

              <div className={classes.row} style={{ justifyContent: "space-evenly" }}>
                <div className={classes.chart}>
                  <BalanceEvolution />
                </div>
                <div className={classes.chart}>
                  <ExpensesEvolution expenses={expenses} />
                </div>
              </div>
            </div>
          </Grow>
        )}

        {broker === true && (
          <Grow in={broker}>
            <div className={[classes.tab].join(" ")}>
              <HomeBroker
                chart={chart}
                bollingerEl={bollingerEl}
                toggleBollinger={toggleBollinger}
                emaEl={emaEl}
                smaEl={smaEl}
                toggleEMA={toggleEMA}
                toggleSMA={toggleSMA}
              />
            </div>
          </Grow>
        )}

        {credit === true && (
          <Grow in={credit}>
            <div className={[classes.tab].join(" ")}>
              <CreditCardHistory expenses={expenses} />
            </div>
          </Grow>
        )}

        {settings && (
          <Grow in={settings}>
            <div className={[classes.tab].join(" ")}>
              <Settings
                email={email}
                setEmail={setEmail}
                setName={setName}
                id={userId}
                name={name}
                setPassword={setPassword}
              />
            </div>
          </Grow>
        )}
      </div>
    </div>
  )
}

export default Dashboard
