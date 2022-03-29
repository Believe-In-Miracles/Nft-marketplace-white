import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import compose from "recompose/compose"
import backImg9 from "./images/Ellipse 2.png";
import backImg10 from "./images/Ellipse 300.png";
import backImg11 from "./images/Rectangle 1197.png";
import * as actions from './redux/actions';
import PropTypes from 'prop-types';
import 'react-multi-carousel/lib/styles.css';
import { Box, Divider } from '@material-ui/core';


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
  button: {
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

})



class MeetTeam extends Component {
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
        <section  style={{padding: "5%", marginTop: 30,}}>
        <div style={{ position: "relative", textAlign: "center", marginBottom: 10, marginTop: 30, }}>
              <img src={backImg9} width="70" height="70" style={{ left: 60, position: "relative" }} />
              <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", bottom: 55, position: "relative" }}>Meet the Team</Typography>

            </div>
        <img src={backImg11} style={{width: "100%", height: "80%"}} />

        </section>

        <section style={{ width: "100%", height: "auto", backgroundColor: "inherit", }}>

          <div style={{marginTop: 40}}>
          <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", fontSize: 34, textAlign: "center",  position: "relative" }}>Who</Typography>
          </div>

          <div>
          <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center",  position: "relative" }}>We Are</Typography>
          </div>
          <div style={{marginLeft: "5%", marginRight: "5%"}}>
          <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 19, paddingTop: 10, lineHeight: 1.5, textAlign: "center" }}>
                Here at The Whitelist, we are dedicated to providing our community the best art, utility and community benefits, period. No More grinding to get a whitelist spot on a good project. We Bring the Good Projects to you. We provide a wide range of options to users who are looking at different <b>levels of engagement and utility. </b>
                Are priority is giving back to the community and its Holders of a Season pass, or an NFT from one of our collections in ways that has yet to been seen in the space. For all the benefits that we can offer please checkout out subscribe page, road map or <b>feel free to reach out by email</b> or on out socials!
              </Typography>
          </div>
        </section>

        <section style={{ width: "100%", height: "auto", backgroundColor: "inherit", marginBottom: 150 }}>
          <Box sx={{ width: "100%" }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
           

            <div style={{ marginTop: 100, marginBottom: 50 }}>
              <Typography color="primary" style={{ fontWeight: "900", fontSize: 30, textAlign: "center" }}>Founders</Typography>
            </div>
            <div style={{ display: "flex", alignContent: "space-around", justifyContent: "space-around", marginRight: 40, marginLeft: 40 }}>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 170, height: 170 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Serge Klassen</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 170, height: 170 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Evan Klassen</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 170, height: 170 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Kristian Hybschman</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 170, height: 170 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Connor Gregory</Typography>
              </div>
            </div>


            <div style={{ marginTop: 100, marginBottom: 50 }}>
              <Typography color="primary" style={{ fontWeight: "900", fontSize: 30, textAlign: "center" }}>Advisory</Typography>
            </div>

            <div style={{ display: "flex", alignContent: "space-around", justifyContent: "space-around", marginRight: 40, marginLeft: 40 }}>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 170, height: 170 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>TBD</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 170, height: 170 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>TBD</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 170, height: 170 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>TBD</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 170, height: 170 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10}}>TBD</Typography>
              </div>
            </div>

          </Box>

          <Box sx={{ width: "100%" }} pt={5} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
            <div style={{ position: "relative", textAlign: "center", marginBottom: -36, marginTop: 50, }}>
              <img src={backImg9} width="70" height="70" style={{ left: 60, position: "relative" }} />
              <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", bottom: 55, position: "relative" }}>Meet the Team</Typography>

            </div>

            <div style={{ marginTop: 100, marginBottom: 50 }}>
              <Typography color="primary" style={{ fontWeight: "900", fontSize: 30, textAlign: "center" }}>Founders</Typography>
            </div>
            <div style={{ display: "flex", marginBottom: 30, alignContent: "space-around", justifyContent: "space-around", marginRight: 10, marginLeft: 10 }}>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Serge Klassen</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Evan Klassen</Typography>
              </div>

            </div>

            <div style={{ display: "flex", marginBottom: 30,  alignContent: "space-around", justifyContent: "space-around", marginRight: 10, marginLeft: 10 }}>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Kristian Hybschman</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Evan Klassen</Typography>
              </div>

            </div>

            <div style={{ display: "flex", marginBottom: 30,  alignContent: "space-around", justifyContent: "space-around", marginRight: 10, marginLeft: 10 }}>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Connor Gregory</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>Charles Hiebert</Typography>
              </div>

            </div>


            <div style={{ marginTop: 100, marginBottom: 50 }}>
              <Typography color="primary" style={{ fontWeight: "900", fontSize: 30, textAlign: "center" }}>Advisory</Typography>
            </div>

            <div style={{ display: "flex", alignContent: "center", justifyContent: "center", marginRight: 10, marginLeft: 10 }}>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center" , paddingTop: 10}}>TBD</Typography>
              </div>
              
            </div>
            <div style={{ display: "flex", marginTop: 50, alignContent: "space-around", justifyContent: "space-around", marginRight: 10, marginLeft: 10 }}>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>TBD</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center", paddingTop: 10 }}>TBD</Typography>
              </div>

            </div>

            <div style={{ display: "flex", marginTop: 50, alignContent: "space-around", justifyContent: "space-around", marginRight: 10, marginLeft: 10 }}>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center" }}>TBD</Typography>
              </div>
              <div>

                <Avatar alt="Remy Sharp" style={{ width: 120, height: 120 }} src={backImg10} />
                <Typography color="primary" style={{ fontWeight: "700", fontSize: 15, textAlign: "center" }}>TBD</Typography>
              </div>

            </div>
          </Box>
        </section>

      </Grid>

    );
  }
}
MeetTeam.propTypes = {
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
), withStyles(useStyles))(MeetTeam);