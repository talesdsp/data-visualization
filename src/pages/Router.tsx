import { Button, CircularProgress, makeStyles } from "@material-ui/core"
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import store from "./Profile/store"

const Fintech = React.lazy(() => import("./Fintech/Fintech"))
const Profile = React.lazy(() => import("./Profile/Profile"))
const Home = React.lazy(() => import("./Home/Home"))

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense
          fallback={
            <CircularProgress
              style={{ top: 0, right: 0, bottom: 0, left: 0, margin: "auto", position: "absolute" }}
            />
          }
        >
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

          <Route exact path="/fintech" component={Fintech} />
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  )
}

const useStyles = makeStyles({
  img: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
    transition: "all 650ms ease-out",
    filter: "sepia(100%) blur(2px)",
    "&:hover": {
      filter: "initial",
      transform: "scale(1.15)",
    },
  },
  link: {
    position: "relative",
    overflow: "hidden",
    height: "100%",
    transition: "all 650ms ease",
    cursor: "pointer",
  },
  left: {
    clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
  },
  right: {
    clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  title: {
    fontSize: "21px",
    top: "40%",
    left: "50%",
    margin: "auto",
    position: "absolute",
    zIndex: 5,
    color: "var(--orange)",
    fontFamily: "Kaushan Script, cursive",
  },
})

const Root = ({ history }) => {
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
      <div className={[classes.link, classes.left].join(" ")}>
        <img
          src="images/github.png"
          alt="github profile"
          className={classes.img}
          onClick={() => history.push("/github")}
          tabIndex={0}
        />
      </div>

      <Button
        color="primary"
        variant="contained"
        style={{
          fontSize: "14px",
          fontFamily: "Kaushan Script, cursive",
          flex: 1,
          position: "fixed",
          zIndex: 1,
          backgroundColor: "var(--orange)",
        }}
      >
        github - fintech
      </Button>

      <div className={[classes.link, classes.right].join(" ")}>
        <img
          src="images/fintech.png"
          alt="fintech"
          className={classes.img}
          onClick={(x) => history.push("/fintech")}
        />
      </div>
    </div>
  )
}

export default Router
