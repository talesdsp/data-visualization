import { makeStyles } from "@material-ui/core"
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Financial, Home, Profile } from "./index"
import store from "./Profile/store"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Root} />

        <Route exact path="/github" component={Home} />

        <Route
          exact
          path="/github/:username"
          render={(props) => (
            <Provider store={store}>
              <Profile {...props} />
            </Provider>
          )}
        />

        <Route exact path="/fintech" component={Financial} />
      </Switch>
    </BrowserRouter>
  )
}

const useStyles = makeStyles({
  img: { borderRadius: "5px", width: "100%", backgroundSize: "cover" },
  card: { width: "100%", marginBottom: "20px" },
  link: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    padding: "20px",
    width: "33vw",
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#333",
    textAlign: "center",
    textDecoration: "none",
  },
})

const Root = () => {
  const classes = useStyles()

  return (
    <div
      style={{
        position: "absolute",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        top: 0,
        bottom: 0,
        width: "100%",
        margin: "auto",
      }}
    >
      <a href="/github" className={classes.link}>
        <div className={classes.card}>
          <img src="images/github.png" alt="github profile" className={classes.img} />
        </div>
        github
      </a>
      <a href="/fintech" className={classes.link}>
        <div className={classes.card}>
          <img src="images/fintech.png" alt="fintech app" className={classes.img} />
        </div>
        fintech
      </a>
    </div>
  )
}

export default Router
