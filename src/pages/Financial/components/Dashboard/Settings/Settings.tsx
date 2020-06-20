import { Container, Grid, Input, makeStyles } from "@material-ui/core";
import { AssignmentInd, Edit, Warning } from "@material-ui/icons";
import ClipboardJS from "clipboard";
import React, { useRef } from "react";
import ReactTooltip from "react-tooltip";
import { svg } from "../../../../../assets";
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
  btn: {
    marginLeft: "1rem",
    borderRadius: ".5rem",
    padding: ".2rem .5rem",
  },
  danger: {
    background: "#efefef",
    color: "#aa1421",
    "&:hover": {
      color: "#fff",
      border: ".1rem solid transparent",
      background: "#aa1421",
    },
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
    padding: theme.spacing(3, 1),
    "&:hover": {
      background: "rgba(255,255,255,.02)",
    },
  },
  icon: {
    fontSize: "3rem",
  },
  input: {
    fontSize: "1.6rem",
    color: "#fff",
    marginRight: "3rem",
  },
  group: {
    textAlign: "left",
    margin: "2rem 0",
    verticalAlign: "middle",
    borderBottom: ".1rem solid #555",
  },
  desc: {
    color: "#aaa",
    fontSize: "1.2rem",
  },
}));

const Settings = ({ id, name, setName, email, setEmail, setPassword }) => {
  const classes = useStyles();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const idRef = useRef(null);

  new ClipboardJS(".btn");

  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <h2 style={{ marginBottom: "2rem" }}>Settings</h2>

      <div className={classes.group}>
        <div className={classes.row}>
          <AssignmentInd className={classes.icon} /> Id
        </div>

        <div className={[classes.row, classes.listItem].join(" ")}>
          <div className={classes.col}>{id}</div>
          <button
            ref={idRef}
            data-tip="Copied!"
            onClick={() => ReactTooltip.show(idRef.current)}
            className={["btn", classes.btn, classes.row].join(" ")}
            data-clipboard-text={id}
          >
            <img src={svg.clipboard} alt="copy" width="15px" /> Copy
          </button>
          <ReactTooltip
            type="success"
            event="click"
            eventOff="blur"
            delayShow={100}
            delayHide={500}
            place="bottom"
          />
        </div>
      </div>

      <div className={classes.group}>
        <div className={classes.row}>
          <Edit className={classes.icon} /> Edit
        </div>

        <div className={[classes.listItem, classes.row].join(" ")}>
          <div className={classes.col}>
            <Input inputRef={nameRef} placeholder={name} className={classes.input} />
          </div>
          <button className={classes.button} onClick={() => setName(nameRef.current.value)}>
            Rename
          </button>
        </div>

        <Grid container>
          <Grid xs={12} md={6} item>
            <div className={[classes.listItem, classes.row].join(" ")}>
              <div className={classes.col}>
                <Input
                  inputRef={emailRef}
                  type="email"
                  placeholder={email}
                  className={classes.input}
                />
              </div>
              <button className={classes.button} onClick={() => setEmail(emailRef.current.value)}>
                Change Email
              </button>
            </div>
          </Grid>

          <Grid xs={12} md={6} item>
            <div className={[classes.listItem, classes.row].join(" ")}>
              <div className={classes.col}>
                <Input
                  inputRef={nameRef}
                  type="password"
                  placeholder="password"
                  className={classes.input}
                />
              </div>
              <button
                className={classes.button}
                onClick={() => setPassword(passwordRef.current.value)}
              >
                Change Password
              </button>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.group}>
        <div className={classes.row}>
          <Warning className={classes.icon} /> Watch out - Bear zone
        </div>
        <div className={[classes.row, classes.listItem, classes.between].join(" ")}>
          <span className={classes.col}>
            <span>Delete account</span>
            <span className={classes.desc}>Withdraw your assets before deleting the account</span>
          </span>
          <button className={[classes.button, classes.danger].join(" ")}>Delete account</button>
        </div>
      </div>
    </Container>
  );
};

export default Settings;
