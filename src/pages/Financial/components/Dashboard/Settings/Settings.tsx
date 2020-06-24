import { Avatar, Grid, Input, makeStyles } from "@material-ui/core";
import { AssignmentInd, Edit, Warning } from "@material-ui/icons";
import ClipboardJS from "clipboard";
import React, { useRef } from "react";
import { svg } from "../../../../../assets";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    fontSize: "1.6rem",
    minWidth: "35rem",
    width: "60%",
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginTop: theme.spacing(2),
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

  new ClipboardJS(".btn");

  const showTooltip = (e) => {
    let b = e.currentTarget.classList;
    b.add("active");

    setTimeout(() => {
      b.remove("active");
    }, 3000);
  };

  return (
    <div className={classes.wrapper}>
      <h2 style={{ marginBottom: "2rem" }}>Settings</h2>

      <div className={classes.group}>
        <div className={classes.row}>
          <AssignmentInd className={classes.icon} /> Id
        </div>

        <div className={classes.row}>
          <Avatar className={classes.avatar} src={svg.avatar}></Avatar>
          <div className={classes.col}>
            <h1 className={classes.username}>{name}</h1>
            <p className={[classes.row, classes.grey].join(" ")}>
              <AssignmentInd fontSize="large" />
              <span> - {id}</span>
            </p>
          </div>
        </div>

        <div className={[classes.row, classes.listItem].join(" ")}>
          <div className={classes.col}>{id}</div>

          <button
            onClick={showTooltip}
            className={["btn", "success-tip", classes.btn, classes.row].join(" ")}
            data-clipboard-text={id}
          >
            <img src={svg.clipboard} alt="copy" width="15px" /> Copy
            <span>Copied!</span>
          </button>
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
    </div>
  );
};

export default Settings;
