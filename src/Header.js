import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { Box, Divider, ListItemAvatar } from "@material-ui/core";
import "./App.css";
import backImg9 from "./images/Vector (1).png";
import backImg10 from "./images/Vector (3).png";
import backImg11 from "./images/MetaMask_Fox.png";
import backImg12 from "./images/sads 1 (1).png";
import * as actions from "./redux/actions";
import { connect } from "react-redux";
import compose from "recompose/compose";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ForumIcon from "@material-ui/icons/Forum";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import MaximizeIcon from "@material-ui/icons/Maximize";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import { SkyLight, SkyLightStateless } from "react-skylight";
import TextField from "@material-ui/core/TextField";
import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Paper from "@material-ui/core/Paper";
import Web3 from "web3";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/3df371cb4e234d9a9fee9370ef61ab0a"))

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    width: window.innerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "red",
    fontWeight: "bold",
    fontFamily: "Dancing Script",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  draw: {
    backgroundColor: "#000",
  },
  paper: {
    background: "rgba(31, 25, 77, 0.91)",
    width: "100%",
  },
  buttonnn: {
    backgroundColor: theme.palette.walletBtn.main,
    color: theme.palette.walletIcn.main,
    borderRadius: 20,
    padding: "2%",
    width: "100%",
  },
  button: {
    backgroundColor: theme.palette.walletBtn.main,
    color: theme.palette.walletIcn.main,
    borderRadius: 20,
    padding: "2%",
    width: 130,
  },
  buttonW: {
    backgroundColor: "inherit",
    color: theme.palette.primary.main,
    borderRadius: 20,
    padding: "2%",
    width: 130,
  },
  buttonn: {
    backgroundColor: "#195BFF",
    color: "#fff",
    borderRadius: 20,
    padding: "2%",
    width: "100%",
    "&:hover": {
      backgroundColor: "#195BFF",
    },
  },
  walletIcn: {
    color: theme.palette.walletIcn.main,
  },
  walletIcnn: {
    color: "#fff",
  },
  listText: {
    fontSize: 2,
    color: "#777",
    textAlign: "center",
    "&:hover": {
      color: "#fff",
      fontWeight: "bold",
    },
    paddingRight: 30,
  },
  menuIcn: {
    color: "inherit",
    "&:hover": {
      color: "#195BFF",
    },
  },
});
const pinkColor = "#C45597";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      anchorEl1: null,
      left: false,
      text1: false,
      text2: false,
      text3: false,
      anchorEl2: null,
      anchorEl3: null,
      pop: false,
      account: [],
      accountBalance: 0,
      metauserl: this.props.metauserl,
    };
    this.clearAccount = this.clearAccount.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  // async componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState, this.state);
  //   if (prevProps.matauserl != this.state.metauserl) {
  //     this.getValue(prevState.metauserl.address[0])
  //   }
  // }
  async componentWillUnmount() {
    this.props.addMetamask([]);
  }
  async openWal() {
    var web3;
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        const changedAccounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (changedAccounts.length > 0) {
          // this.setState({account: changedAccounts})
          this.props.addMetamask(changedAccounts);
        }
      } catch (e) {
        // User has denied account access to DApp...
        this.props.addMetamask([]);
      }

      window.ethereum.on("accountsChanged", this.clearAccount);

      // window.ethereum.off('accountsChanged', this.clearAccount);
    }
    // Legacy DApp Browsers
    else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    //   console.log("$$$$$$$$$$$", web3.eth.getBalance());
    }
    // Non-DApp Browsers
    else {
      alert("You have to install MetaMask !");
    }
  }
  clearAccount(e) {
    this.props.addMetamask(e);

    if (e.length < 1) {
      this.setState({ pop: false });
    }
  }
  getValue(address){
    address && web3.eth.getBalance(address, async (err, result) => {
      if (err) {
        console.log("*********************",err)
      } else {
        console.log(web3.utils.fromWei(result, "ether") + " ETH");
        this.setState((state, props) => ({
          ...state,
          accountBalance: web3.utils.fromWei(result, "ether")
        }));
        // this.state.accountBalance=await web3.utils.fromWei(result, "ether");
        // return(web3.utils.fromWei(result, "ether"));
      }
    })
  }
  render() {
    const { value, pathMap } = this.state;
    const actionClasses = this.props.classes;
    const {
      data,
      title,
      bdata,
      auth,
      anchorEl,
      text1,
      text2,
      text3,
      anchorEl1,
      anchorEl2,
      anchorEl3,
    } = this.state;
    const { classes, switchl, metauserl } = this.props;
    this.getValue(metauserl.address[0]);
    const open = Boolean(anchorEl);
    var myBigGreenDialog = {
      width: "50%",
      height: "400px",
      position: "fixed",
      minHeight: "30px",
      top: "50%",
      left: "50%",
      marginTop: "-200px",
      marginLeft: "-25%",
      backgroundColor: switchl.switch ? "#f8f8fb" : "#111318",
      borderRadius: "20px",
      display: "flex",
      zIndex: 100,
      padding: "15px",
      boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)",
      padding: 0,
    };

    var myBigGreenDialogMobile = {
      width: "80%",
      height: "500px",
      position: "fixed",
      // minHeight: '30px',
      top: "10%",
      left: "3%",
      margin: "10%",
      backgroundColor: switchl.switch ? "#f8f8fb" : "#111318",
      borderRadius: "20px",
      display: "flex",
      zIndex: 100,
      padding: "15px",
      boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)",
      padding: 0,
    };

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          elevation={0}
          style={{ backgroundColor: switchl.switch ? "#EAF7FF" : "#1B1F31" }}
        >
          <Toolbar>
            <React.Fragment key="left">
              <Box display={{ xs: "block", md: "none" }} m={1}>
                <IconButton
                  onClick={() => this.setState({ left: true })}
                  edge="start"
                  className={classes.menuButton}
                  color="primary"
                  aria-label="menu"
                >
                  <MenuIcon onClick={() => this.setState({ left: true })} />
                </IconButton>
                {/* </Box> */}

                <SwipeableDrawer
                  anchor="left"
                  open={this.state.left}
                  onClose={() => this.setState({ left: false })}
                  onOpen={() => this.setState({ left: true })}
                  disableBackdropTransition={!iOS}
                  disableDiscovery={iOS}
                  classes={{ paper: classes.paper }}
                >
                  <div style={{ padding: "2%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignContent: "space-between",
                      }}
                    >
                      <div
                        style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
                      >
                        <Avatar
                          onClick={() => this.setState({ left: false })}
                          style={{ backgroundColor: "#fff" }}
                        >
                          <ForumIcon style={{ color: "#000" }} />
                        </Avatar>
                        <Avatar
                          onClick={() => this.setState({ left: false })}
                          style={{ backgroundColor: "#fff" }}
                        >
                          <Brightness3Icon
                            style={{ color: "#000" }}
                            onClick={() => this.props.switchMode()}
                          />
                        </Avatar>
                      </div>
                      <div style={{}}>
                        <Avatar
                          onClick={() => this.setState({ left: false })}
                          style={{ backgroundColor: "#fff" }}
                        >
                          <CloseIcon style={{ color: "#000" }} />
                        </Avatar>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 50,
                        marginBottom: 10,
                      }}
                    >
                      <div>
                        <img
                          src={backImg10}
                          height="30"
                          width="70"
                          style={{ marginLeft: 30 }}
                        />
                        <div style={{ marginTop: 20 }}>
                          <Typography
                            style={{
                              fontWeight: "400",
                              fontSize: 20,
                              color: "#fff",
                            }}
                          >
                            The White List
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <List>
                      <Link
                        to={`${process.env.PUBLIC_URL}/subscribe`}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        <ListItem
                          onClick={() => this.setState({ left: false })}
                        >
                          <ListItemIcon>
                            <MaximizeIcon
                              className={classes.menuIcn}
                              style={{ position: "relative", top: 7 }}
                            />
                          </ListItemIcon>

                          <ListItemText
                            className={classes.listText}
                            id="switch-list-label-wifi"
                            style={{ fontSize: 5 }}
                            primary="Suscribe"
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                              <MaximizeIcon
                                className={classes.menuIcn}
                                style={{ position: "relative", top: 7 }}
                              />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </Link>
                      <Link
                        to={`${process.env.PUBLIC_URL}/roadmap`}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        <ListItem
                          onClick={() => this.setState({ left: false })}
                        >
                          <ListItemIcon>
                            <MaximizeIcon
                              className={classes.menuIcn}
                              style={{ position: "relative", top: 7 }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listText}
                            id="switch-list-label-wifi"
                            style={{ fontSize: 5 }}
                            primary="Roadmap"
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                              <MaximizeIcon
                                className={classes.menuIcn}
                                style={{ position: "relative", top: 7 }}
                              />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </Link>
                      <ListItem onClick={() => this.setState({ left: false })}>
                        <ListItemIcon>
                          <MaximizeIcon
                            className={classes.menuIcn}
                            style={{ position: "relative", top: 7 }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.listText}
                          id="switch-list-label-wifi"
                          style={{ fontSize: 5 }}
                          primary="Upcoming Drops"
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <MaximizeIcon
                              className={classes.menuIcn}
                              style={{ position: "relative", top: 7 }}
                            />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Link
                        to={`${process.env.PUBLIC_URL}/meet-the-team`}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        <ListItem
                          onClick={() => this.setState({ left: false })}
                        >
                          <ListItemIcon>
                            <MaximizeIcon
                              className={classes.menuIcn}
                              style={{ position: "relative", top: 7 }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listText}
                            id="switch-list-label-wifi"
                            style={{ fontSize: 5 }}
                            primary="Meet The Team"
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                              <MaximizeIcon
                                className={classes.menuIcn}
                                style={{ position: "relative", top: 7 }}
                              />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </Link>
                    </List>
                  </div>
                  {!metauserl.connected && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 30,
                      }}
                    >
                      <Button
                        onClick={() => {
                          this.openWal();
                          this.setState({ left: false });
                        }}
                        className={classes.buttonn}
                        startIcon={
                          <AccountBalanceWalletIcon
                            className={classes.walletIcnn}
                          />
                        }
                      >
                        Wallet
                      </Button>
                    </div>
                  )}
                </SwipeableDrawer>
              </Box>
            </React.Fragment>

            <div className={classes.title}>
              <Link
                to={`${process.env.PUBLIC_URL}/`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <img
                  src={switchl.switch ? backImg9 : backImg10}
                  height="30"
                  width="70"
                />
              </Link>
            </div>
            {metauserl.connected && (
              <Box display={{ xs: "block", md: "none" }} m={1}>
                <div onClick={() => this.setState({ pop: true })}>
                  <Avatar
                    alt="Remy Sharp"
                    style={{ width: 40, height: 40 }}
                    src={backImg12}
                  />
                </div>
              </Box>
            )}

            <Box
              display={{
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              }}
              m={1}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gridGap: 5,
                    }}
                  >
                    <Link
                      to={`${process.env.PUBLIC_URL}/subscribe`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <Typography color="primary" style={{ marginTop: 7 }}>
                        Subscribe
                      </Typography>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gridGap: 5,
                    }}
                  >
                    <Link
                      to={`${process.env.PUBLIC_URL}/roadmap`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <Typography color="primary" style={{ marginTop: 7 }}>
                        Roadmap
                      </Typography>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gridGap: 5,
                    }}
                  >
                    <Link
                      to={`${process.env.PUBLIC_URL}/`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <Typography color="primary" style={{ marginTop: 7 }}>
                        Upcoming Drops
                      </Typography>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gridGap: 5,
                    }}
                  >
                    <Link
                      to={`${process.env.PUBLIC_URL}/meet-the-team`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <Typography color="primary" style={{ marginTop: 7 }}>
                        Meet the Teams
                      </Typography>
                    </Link>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gridGap: 5,
                      marginTop: 3,
                    }}
                  >
                    <ForumIcon
                      color="primary"
                      onClick={() => this.props.switchMode()}
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gridGap: 5,
                      marginTop: 3,
                    }}
                  >
                    <Brightness3Icon
                      color="primary"
                      onClick={() => this.props.switchMode()}
                    />
                  </div>
                  <div>
                    {!metauserl.connected ? (
                      <Button
                        onClick={() => this.openWal()}
                        className={classes.button}
                        startIcon={
                          <AccountBalanceWalletIcon
                            className={classes.walletIcn}
                          />
                        }
                      >
                        Wallet
                      </Button>
                    ) : (
                      <Button
                        onClick={() => this.setState({ pop: !this.state.pop })}
                        className={classes.buttonW}
                        startIcon={
                          <Avatar
                            alt="Remy Sharp"
                            style={{ width: 20, height: 20 }}
                            src={backImg12}
                          />
                        }
                        endIcon={
                          <ExpandLessIcon className={classes.walletIcn} />
                        }
                      >
                        <b>{this.state.accountBalance}</b> ETH
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
          m={1}
        >
          <SkyLightStateless
            onCloseClicked={() => this.setState({ pop: false })}
            afterClose={() => {}}
            isVisible={this.state.pop}
            hideOnOverlayClicked={true}
            dialogStyles={myBigGreenDialog}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "space-between",
                padding: "10%",
              }}
            >
              <div>
                <Typography
                  color="primary"
                  variant="h1"
                  component="h2"
                  style={{ fontWeight: "900", fontSize: 20 }}
                >
                  Wallet
                </Typography>
                <div
                  style={{
                    display: "flex",
                    padding: "5%",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ width: 150, height: 150, marginBottom: 10 }}>
                    <CircularProgressbarWithChildren
                      styles={buildStyles({
                        pathColor: `#FCC21B`,

                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                      value={35}
                    >
                      {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                      <Typography
                        color="primary"
                        variant="h1"
                        component="h2"
                        style={{ fontWeight: "900", fontSize: 40 }}
                      >
                        3
                      </Typography>
                      <div style={{ fontSize: 12, marginTop: -5 }}>
                        <Typography
                          color="primary"
                          variant="h1"
                          component="h2"
                          style={{ fontWeight: "400", fontSize: 12 }}
                        >
                          Drops Remaining
                        </Typography>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>

                  <Button className={classes.buttonnn}>
                    <b>SUBSCRIBE RENEWAL</b>
                  </Button>

                  <div style={{ marginTop: 15 }}>
                    <Typography
                      color="primary"
                      variant="h1"
                      component="h2"
                      style={{ fontWeight: "400", fontSize: 12 }}
                    >
                      You are secured Until <b>Oct 22nd, 2022</b>
                    </Typography>
                  </div>
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <Typography
                  color="primary"
                  variant="h1"
                  component="h2"
                  style={{
                    fontWeight: "900",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Account Info
                </Typography>
                <div style={{ width: "100%", padding: "10%" }}>
                  <div style={{ marginBottom: 10, width: "100%" }}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      color="primary"
                      label="Display Name"
                      variant="outlined"
                    />
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <TextField
                      color="primary"
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      placeholder="Enter Email"
                      variant="outlined"
                    />
                  </div>

                  <Button className={classes.buttonn}>
                    <b>Update Profile</b>
                  </Button>

                  <div
                    style={{
                      position: "absolute",
                      top: "105%",
                      width: "100%",
                      right: "0%",
                    }}
                  >
                    <Paper
                      style={{
                        padding: 20,
                        borderRadius: 20,
                        backgroundColor: switchl.switch ? "#f8f8fb" : "#111318",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignContent: "space-between",
                          marginBottom: 10,
                        }}
                      >
                        <Typography
                          color="primary"
                          variant="h1"
                          component="h2"
                          style={{
                            fontWeight: "400",
                            fontSize: 12,
                            color: "#777",
                          }}
                        >
                          My Address Wallet
                        </Typography>
                        <Typography
                          color="primary"
                          variant="h1"
                          component="h2"
                          style={{ fontWeight: "400", fontSize: 12 }}
                        >
                          {metauserl.address[0]}
                        </Typography>
                      </div>
                      <Divider />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignContent: "space-between",
                          marginTop: 10,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          this.props.addMetamask([]);
                          this.setState({ pop: false });
                        }}
                      >
                        <img src={backImg11} width="30" height="30" />
                        <Typography
                          color="primary"
                          variant="h1"
                          component="h2"
                          style={{
                            fontWeight: "700",
                            fontSize: 16,
                            position: "relative",
                            top: 5,
                          }}
                        >
                          DISCONNECT METAMASK
                        </Typography>
                      </div>
                    </Paper>
                  </div>
                </div>
              </div>

              {/* <div style={{ position: "relative", top: 50, width: "100%", marginLeft: "30%" }}>
                                <Paper style={{ padding: 20, borderRadius: 20 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignContent: "space-between", marginBottom: 10 }}>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", fontSize: 12, color: "#777" }}>My Address Wallet</Typography>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", fontSize: 12 }}>1F1tAaz5x1Hc...4xqX</Typography>
                                    </div>
                                    <Divider />
                                    <div style={{display: "flex", justifyContent: "space-between", alignContent: "space-between", marginTop: 10}}>
                                        <img src={backImg11} width="30" height="30" />
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "700", fontSize: 16, position: "relative", top: 5 }}>DISCONNECT METAMASK</Typography>
                                    </div>
                                </Paper>
                        </div> */}
            </div>
          </SkyLightStateless>
        </Box>
        <Box
          display={{
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          }}
          m={1}
        >
          <SkyLightStateless
            onCloseClicked={() => this.setState({ pop: false })}
            afterClose={() => {
              this.props.closeModal();
              this.setState({ otpError: "", otp: "", email: "" });
            }}
            isVisible={this.state.pop}
            hideOnOverlayClicked={true}
            dialogStyles={myBigGreenDialogMobile}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "10%",
              }}
            >
              <div>
                <Typography
                  color="primary"
                  variant="h1"
                  component="h2"
                  style={{
                    fontWeight: "900",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Wallet
                </Typography>
                <div
                  style={{
                    display: "flex",
                    padding: "5%",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: 100, height: 100, marginBottom: 10 }}>
                    <CircularProgressbarWithChildren
                      styles={buildStyles({
                        pathColor: `#FCC21B`,

                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                      value={35}
                    >
                      {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                      <Typography
                        color="primary"
                        variant="h1"
                        component="h2"
                        style={{ fontWeight: "900", fontSize: 30 }}
                      >
                        3
                      </Typography>
                      <div style={{ fontSize: 10, marginTop: -5 }}>
                        <Typography
                          color="primary"
                          variant="h1"
                          component="h2"
                          style={{ fontWeight: "400", fontSize: 9 }}
                        >
                          Drops Remaining
                        </Typography>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>

                  <Button className={classes.buttonnn}>
                    <b>SUBSCRIBE RENEWAL</b>
                  </Button>

                  <div style={{ marginTop: 15 }}>
                    <Typography
                      color="primary"
                      variant="h1"
                      component="h2"
                      style={{ fontWeight: "400", fontSize: 12 }}
                    >
                      You are secured Until <b>Oct 22nd, 2022</b>
                    </Typography>
                  </div>
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <Typography
                  color="primary"
                  variant="h1"
                  component="h2"
                  style={{
                    fontWeight: "900",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Account Info
                </Typography>
                <div style={{ width: "100%", marginTop: 15 }}>
                  <div style={{ marginBottom: 10, width: "100%" }}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      color="primary"
                      label="Display Name"
                      variant="outlined"
                    />
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <TextField
                      color="primary"
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      placeholder="Enter Email"
                      variant="outlined"
                    />
                  </div>

                  <Button className={classes.buttonn}>
                    <b>Update Profile</b>
                  </Button>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "102%",
                  width: "100%",
                  right: "1%",
                }}
              >
                <Paper
                  style={{
                    padding: 20,
                    borderRadius: 20,
                    backgroundColor: switchl.switch ? "#f8f8fb" : "#111318",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <Typography
                      color="primary"
                      variant="h1"
                      component="h2"
                      style={{ fontWeight: "400", fontSize: 12, color: "#777" }}
                    >
                      My Address Wallet
                    </Typography>
                    <Typography
                      color="primary"
                      variant="h1"
                      component="h2"
                      style={{ fontWeight: "400", fontSize: 12 }}
                    >
                      {metauserl.address[0]}
                    </Typography>
                  </div>
                  <Divider />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "space-between",
                      marginTop: 10,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      this.props.addMetamask([]);
                      this.setState({ pop: false });
                    }}
                  >
                    <img src={backImg11} width="30" height="30" />
                    <Typography
                      color="primary"
                      variant="h1"
                      component="h2"
                      style={{
                        fontWeight: "700",
                        fontSize: 16,
                        position: "relative",
                        top: 5,
                      }}
                    >
                      DISCONNECT METAMASK
                    </Typography>
                  </div>
                </Paper>
              </div>
            </div>
          </SkyLightStateless>
        </Box>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  switchMode: () => dispatch(actions.switchMode()),
  addMetamask: (data) => dispatch(actions.addMetamask(data)),
});
const mapStateToProps = (state) => {
  return {
    switchl: state.switch,
    metauserl: state.metauser,
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(useStyles)
)(Header);
