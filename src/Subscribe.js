import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
// Import your profile image in images folder
import myImg from "./images/1.png";
import { connect } from 'react-redux';
import compose from "recompose/compose"

import backImg9 from "./images/Ellipse 2.png";
import backImg10 from "./images/4.png";
import backImg11 from "./images/Group 42961.png";
import backImg12 from "./images/Group (1).png";
import Switch from "@material-ui/core/Switch";
import * as actions from './redux/actions';
import PropTypes from 'prop-types';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const useStyles = theme => ({
  root: {
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  media: {
    height: "80%",
    width: "100%",
    borderRadius: 19

  },
  date: {
    backgroundColor: theme.palette.date.main,
    padding: 10,
    borderRadius: 12,
    marginRight: 5
  },
  card: {
    width: 300,
    height: 350,
    backgroundColor: theme.palette.cardBg.main,
    borderRadius: 10,
    padding: 20,
    margin: 15

  },
  cardtt: {

    backgroundColor: theme.palette.cardBg.main,
    borderRadius: 10,
    margin: 15,
    boxShadow: theme.palette.boxShadow.main


  },
  cardt: {

    backgroundColor: theme.palette.cardBg.main,
    borderRadius: 10,
    margin: 15,
    '&:hover': {
      boxShadow: theme.palette.boxShadow.main
    }

  },
  cardn: {

    backgroundColor: theme.palette.cardBg.main,
    borderRadius: 10,
    margin: 15,
    padding: "2%",
    '&:hover': {
      boxShadow: theme.palette.boxShadow.main
    }


  },
  avatar: {
    backgroundColor: red[500],
  },
  listText: {
    fontSize: 2,

  },
  listTextNil: {

    color: "#A9A9BF"
  },
  button:{
    backgroundColor: "#E1EAFF",
    width: "80%",
    color: "#fff",
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 15,
    borderRadius: 25,
    '&:hover': {
      backgroundColor: "#195BFF" 
    }
  },

  buttonn:{
    backgroundColor: "#195BFF",
    width: "80%",
    color: "#fff",
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 15,
    borderRadius: 25,

  },
  backdrop: {
  //  zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  
})



class Subscribe extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  render() {

    const { classes, switchl } = this.props;

    return (
      <Grid
        className={classes.root}
        container

      >
        {/* <section style={{ backgroundColor: switchl.switch ? "#EAF7FF" : "#1B1F31", height: "auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "10%" }}>

        </section> */}

        <section style={{ width: "100%", height: "auto", backgroundColor: "inherit", marginTop: 50, marginBottom: 100 }}>
        <div style={{ position: "relative", textAlign: "center", marginBottom: -36, marginTop: 50, }}>
            <img src={backImg9} width="70" height="70" style={{ left: 60, position: "relative" }} />
            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", bottom: 55, position: "relative" }}>Subscribe</Typography>

          </div>
          <div style={{marginBottom: 10}}>
            <Typography color="primary" style={{ fontWeight: "200", fontSize: 15, textAlign: "center" }}>Join the Whitelist by choose your perfect option below</Typography>
          </div>
        <div>
            <Grid container spacing={10} direction="row"  >
              <Grid item md={4} xs={12} sm={4} zeroMinWidth >
                <Card elevation={0} className={classes.cardt}>
                  <div style={{ marginBottom: 20, marginTop: 20 }}>
                    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "700", fontSize: 25, textAlign: "center" }}>Tier 1 </Typography>
                  </div>
                  <div style={{ backgroundColor: switchl.switch ? "#ECF1FA94" : "#3F4050", padding: 20, width: "100%" }}>
                    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 35, textAlign: "center" }}>0.3 ETH</Typography>
                  </div>
                  <div >
                  <List  >
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="3 Drops from The Whitelist (Season 1)" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Access to Community Prize Pools" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Voting Rights for Future Pools, Drops and artist Collaborations" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText  className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Early Mint access (Higher Chance of a legendary item)" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Launchpad Access " />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="“Elixir” air drop" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Access to The Inner Circle" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Yield Farming access and yield farming prize pool" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Partnered projects Whitelist Spots" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Early Access to Season 2 with The Whitelist" />
                        </ListItem>
                        </List>

                        <Button className={classes.button}>
                          Get Started
                        </Button>
                  </div>
                </Card>
              </Grid>

              <Grid item md={4} xs={12} sm={4} zeroMinWidth >
                <Card elevation={0} className={classes.cardtt}>
                  <div style={{ marginBottom: 20, marginTop: 20 }}>
                    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "700", fontSize: 25, textAlign: "center" }}>Tier 2 </Typography>
                  </div>
                  <div style={{ backgroundColor: switchl.switch ? "#ECF1FA94" : "#3F4050", padding: 20, width: "100%" }}>
                    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 35, textAlign: "center" }}>0.4 ETH</Typography>
                  </div>
                  <div >
                  <List  >
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="3 Drops from The Whitelist (Season 1)" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Access to Community Prize Pools" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Voting Rights for Future Pools, Drops and artist Collaborations" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Early Mint access (Higher Chance of a legendary item)" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Launchpad Access " />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="“Elixir” air drop" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Access to The Inner Circle" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Yield Farming access and yield farming prize pool" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Partnered projects Whitelist Spots" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#A9A9BF"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listTextNil} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Early Access to Season 2 with The Whitelist" />
                        </ListItem>
                        </List>
                        <Button className={classes.buttonn}>
                          Get Started
                        </Button>
                        {/* <Typography color="primary" style={{ fontWeight: "400", fontSize: 13, paddingTop: 10 }}>3 Drops from The Whitelist (Season 1)</Typography> */}
                      </div>
                    </Card>
                  </Grid>

                  <Grid item md={4} xs={12} sm={4} zeroMinWidth >
                    <Card elevation={0} className={classes.cardt}>
                      <div style={{ marginBottom: 20, marginTop: 20 }}>
                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "700", fontSize: 25, textAlign: "center" }}>Tier 3 </Typography>
                      </div>
                      <div style={{ backgroundColor: switchl.switch ? "#ECF1FA94" : "#3F4050", padding: 20, width: "100%" }}>
                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 35, textAlign: "center" }}>0.6 ETH</Typography>
                      </div>
                      <div >
                      <List  >
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="3 Drops from The Whitelist (Season 1)" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Access to Community Prize Pools" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Voting Rights for Future Pools, Drops and artist Collaborations" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Early Mint access (Higher Chance of a legendary item)" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Launchpad Access " />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="“Elixir” air drop" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Access to The Inner Circle" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Yield Farming access and yield farming prize pool" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Partnered projects Whitelist Spots" />
                        </ListItem>

                        <ListItem>
                        <ListItemIcon>
                          <CheckIcon style={{color: "#2BD182"}}/>
                        </ListItemIcon>
                        <ListItemText className={classes.listText} id="switch-list-label-wifi" style={{fontSize: 5}} primary="Early Access to Season 2 with The Whitelist" />
                        </ListItem>
                        </List>
                        <Button className={classes.button}>
                          Get Started
                        </Button>
                      </div>
                    </Card>
                  </Grid>
              </Grid>
          </div>



          </section>

         


      </Grid>

    );
  }
}
Subscribe.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  switchMode: () => dispatch(actions.switchMode()),

})
const mapStateToProps = state => {
  return {
    switchl: state.switch,

  };
};
export default compose(connect(
  mapStateToProps,
  mapDispatchToProps
), withStyles(useStyles))(Subscribe);