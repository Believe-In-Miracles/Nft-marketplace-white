import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import compose from "recompose/compose"
import backImg9 from "./images/Ellipse 2.png";
import * as actions from './redux/actions';
import PropTypes from 'prop-types';
import 'react-multi-carousel/lib/styles.css';

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
  
})



class HowItWork extends Component {
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
        <section style={{ backgroundColor: switchl.switch ? "#EAF7FF" : "#1B1F31", height: "auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "10%" }}>
   
        
     
        </section>

        <section style={{ width: "100%", height: "auto", backgroundColor: "inherit" }}>
        <div style={{ position: "relative", textAlign: "center", marginBottom: -36, marginTop: 50, }}>
            <img src={backImg9} width="70" height="70" style={{ left: 60, position: "relative" }} />
            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", bottom: 55, position: "relative" }}>Let us help</Typography>

          </div>

          <div style={{ marginTop: 15, marginBottom: 25}}>
              <Typography color="primary" style={{ fontWeight: "300", fontSize: 15, textAlign: "center" }}>Find the most asked questions and their answer right here</Typography>
            </div>

          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19, paddingBottom: 10 }}>Does the Whitelist have a roadmap?</Typography>
            <a href="#" ><b>Roadmap</b></a>
          </div>
          </Card>

          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>What does My Subscription get me?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>Depending on the tier you have decided to go with, every tier unlocks certain perks and advantages. Visit (Link to subscriptions) to find out more.</Typography>
          </div>
          </Card>

          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>Can I Buy, sell or trade my Tier Pass?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>When you purchase a subscription through The Whitelist you will receive your own Unique NFT pass. The whitelist has 3 tier options to pick from. Choose wisely 😉</Typography>
          </div>
          </Card>

          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>Do we have social media?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>You can find us and our community on Discord, Twitter and Instagram!</Typography>
          </div>
          </Card>
          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>How do I get in contact with The Whitelist?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>Feel free to reach out to us through email at (<span><b><a href="mailto:info@thewhitelist.com">info@thewhitelist.com</a></b></span>). Or the red button in the bottom right corner. </Typography>
          </div>
          </Card>
          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>How many collections will I get with my Tier pass?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>Every season with the Whitelist, each tiered user will receive 3 NFT’s which is not including your tier pass. For more information about the tier levels please visit our subscription page.</Typography>
          </div>
          </Card>
          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>What is the benefit of holding an NFT from the whitelist?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>At the whitelist we strive to provide our users with some of the best utility that the market has to offer.  For an in-depth understanding of utility please visit <span><b><a href="/roadmap">Roadmap</a></b></span> and tier options <span><b><a href="/subscribe">Subscribe</a></b></span>. </Typography>
          </div>
          </Card>
          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>How do I partner with the Whitelist?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>For all enquiries please email (<span><b><a href="mailto:info@thewhitelist.com">info@thewhitelist.com</a></b></span></Typography>
          </div>
          </Card>
          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>Who is behind the whitelist?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}><b><a href="/meet-the-team">Meet the Team</a></b></Typography>
          </div>
          </Card>
          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>When will the collections be revealed?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>Collection reveal date varies per collection. Please visit our collections page for more details.</Typography>
          </div>
          </Card>
          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>How often do I get an NFT with my Whitelist subscription?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>With The whitelist a user will receive a guaranteed 3 drops. Each drop will happen 1-2 months apart depending on the team and artists. At the whitelist we strive to provide you with the best product possible.</Typography>
          </div>
          </Card>
          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>How much does it cost to subscribe to The Whitelist?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>Here at the whitelist, we have a multitude of subscription options that aim to fit all types of users. Please visit us at <span><b><a href="/subscribe">Subscribe</a></b></span> for details.</Typography>
          </div>
          </Card>
          <Card elevation={0} className={classes.cardn}>
          <div>
            <Typography color="primary" style={{ fontWeight: "700", fontSize: 19,  }}>How Much will Mint be?</Typography>
            <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10,  }}>Mint will vary per drop but will be anywhere between <b>0.8-1.5 ETH</b>.</Typography>
          </div>
          </Card>



          </section>

      </Grid>

    );
  }
}
HowItWork.propTypes = {
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
), withStyles(useStyles))(HowItWork);