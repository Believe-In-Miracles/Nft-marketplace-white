import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import compose from "recompose/compose"
import backImg2 from "./images/2.png";
import backImg3 from "./images/Group 42962.png";
import backImg4 from "./images/Frame.png";
import backImg5 from "./images/Group 43169 (1).png";
import backImg6 from "./images/Group 43169 (2).png";
import backImg7 from "./images/Group 43169.png";
import backImg8 from "./images/Ellipse 3.png";
import backImg9 from "./images/Ellipse 2.png";
import backImg10 from "./images/4.png";
import backImg11 from "./images/Group 42961.png";
import backImg12 from "./images/Group (1).png";
import backImg13 from "./images/Path 12342.png";
import backImg14 from "./images/Path 12345.png";
import backImg15 from "./images/Rectangle 1107.png";
import * as actions from './redux/actions';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from '@material-ui/core/Button';
import { Box, Divider } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';



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
    // '&:hover': {
    //   boxShadow: theme.palette.boxShadow.main
    // }

  },
  buttonnn: {
    backgroundColor: "#195BFF",
    color: "#fff",
    fontWeight: "bold",
    padding: "5%",
    width: 100,
    '&:hover': {
        backgroundColor: "#195BFF"
    }
},
cardntt: {
  backgroundColor: theme.palette.cardBg.main,
  borderRadius: 10,
  margin: 15,
 paddingTop: 15,
 paddingBottom: 15

},
  cardnt: {

    backgroundColor: theme.palette.cardBg.main,
    borderRadius: 10,
    margin: 15,
    position: "absolute",
    bottom: "20%",
    left: "25%",
    padding: "10%"

    // '&:hover': {
    //   boxShadow: theme.palette.boxShadow.main
    // }

  },
  cardtt: {
    backgroundColor: theme.palette.cardBg.main,
    borderRadius: 10,
    margin: 15,
    boxShadow: theme.palette.boxShadow.main
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
  buttonn: {
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
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

})



class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  componentDidMount(){

   
  }


  render() {

    const { classes, switchl } = this.props;

    return (
      <Grid
        className={classes.root}
        container

      >

        <section style={{ backgroundColor: switchl.switch ? "#EAF7FF" : "#1B1F31", height: "auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "10%" }}>
          <Box sx={{ width: "100%" }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
            <Grid container spacing={10} direction="row"  >
              <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                <img src={switchl.switch ? backImg13 : backImg14} width="auto" height="auto" style={{ left: "70%", position: "relative" }} />
                <img src={switchl.switch ? backImg13 : backImg14} width="auto" height="auto" style={{ right: "45%", top: "20%", position: "relative" }} />

                <div style={{ marginBottom: -40 }}>
                  <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>Welcome <span style={{ fontWeight: "200", fontSize: 60 }}> To</span></Typography>
                  <div style={{ position: "relative", }}>
                    <img src={backImg9} width="70" height="70" style={{ left: 300, position: "relative" }} />
                    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "200", fontSize: 60, bottom: 77, position: "relative" }}>the <span style={{ fontWeight: "900", fontSize: 60 }}> WhiteList</span></Typography>
                  </div>
                </div>
                <div>
                  <Typography color="primary" style={{ fontWeight: "200", fontSize: 15, }}>The Best Artists, Projects And Utility. No Compromise</Typography>
                </div>
                <div style={{ marginTop: 60 }}>
                  <Typography color="primary" style={{ fontWeight: "200", fontSize: 15, }}>Join Us</Typography>
                  <div style={{ display: "flex" }}>
                    <div >
                      <div style={{ display: "flex", marginRight: 10 }}>
                        <div className={classes.date} >
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>0</Typography>
                        </div>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>5</Typography>
                        </div>
                      </div>
                      <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>DAYS</Typography>
                    </div>
                    <div >
                      <div style={{ display: "flex", marginRight: 10 }}>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>2</Typography>
                        </div>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>6</Typography>
                        </div>
                      </div>
                      <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>HOURS</Typography>
                    </div>
                    <div >
                      <div style={{ display: "flex" }}>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>1</Typography>
                        </div>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>9</Typography>
                        </div>
                      </div>
                      <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>MINUTES</Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                <div style={{ position: "relative", textAlign: "center", }}>


                  <img src={switchl.switch ? backImg2 : backImg10} width="500" height="500" style={{ margin: 10 }} />


                </div>

              </Grid>
            </Grid>
          </Box>

          <Box sx={{ width: "100%" }} pt={5} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
            <Grid container spacing={10} direction="row"  >
              <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "relative", right: 20 }}>
                    {/* <img src={backImg9} width="70" height="70" style={{ left: 150, top: 100, position: "relative" }} /> */}
                    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>Welcome <span style={{ fontWeight: "200", fontSize: 40 }}> To</span></Typography>
                    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "200", fontSize: 40 }}>the <span style={{ fontWeight: "900", fontSize: 40 }}> WhiteList</span></Typography>
                  </div>
                </div>
                <div style={{ paddingRight: "10%", paddingLeft: "5%" }}>
                  <Typography color="primary" style={{ fontWeight: "200", fontSize: 15, paddingTop: 10, textAlign: "center" }}>The Best Artists, Projects And Utility. No Compromise</Typography>
                </div>
                <div style={{ marginTop: 60 }}>
                  <Typography color="primary" style={{ fontWeight: "200", fontSize: 15, }}>Join Us</Typography>
                  <div style={{ display: "flex" }}>
                    <div >
                      <div style={{ display: "flex", marginRight: 10 }}>
                        <div className={classes.date} >
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>0</Typography>
                        </div>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>5</Typography>
                        </div>
                      </div>
                      <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>DAYS</Typography>
                    </div>
                    <div >
                      <div style={{ display: "flex", marginRight: 10 }}>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>2</Typography>
                        </div>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>6</Typography>
                        </div>
                      </div>
                      <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>HOURS</Typography>
                    </div>
                    <div >
                      <div style={{ display: "flex" }}>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>1</Typography>
                        </div>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>9</Typography>
                        </div>
                      </div>
                      <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>MINUTES</Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                <div style={{ position: "relative", textAlign: "center", }}>


                  <img src={switchl.switch ? backImg2 : backImg10} width="220" height="220" style={{ margin: 10 }} />


                </div>

              </Grid>
            </Grid>
          </Box>
        </section>
        <section style={{ height: "auto", width: "100%", backgroundColor: switchl.switch ? "#fff" : "#000", padding: "10%" }}>
          <Box sx={{ width: "100%" }} pt={5} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
            <Grid container spacing={10} direction="row"  >
              <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                <img src={switchl.switch ? backImg3 : backImg11} width="300" height="300" style={{ padding: 10 }} />
              </Grid>
              <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "200", fontSize: 25, paddingBottom: 20 }}>About the <span style={{ fontWeight: "900", fontSize: 25 }}> WL.</span></Typography>
                <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "200", fontSize: 30, }}>

                  Here at The <b>Whitelist</b>, we are dedicated to providing our community the <b>best art, utility</b> and <b>community</b> benefits, period.
                </Typography>
                <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 19, paddingTop: 10, lineHeight: 1.5 }}>
                  Here at The Whitelist, we are dedicated to providing our community the best art, utility and community benefits, period. No More grinding to get a whitelist spot on a good project. We Bring the Good Projects to you. We provide a wide range of options to users who are looking at different <b>levels of engagement and utility. </b>
                  Are priority is giving back to the community and its Holders of a Season pass, or an NFT from one of our collections in ways that has yet to been seen in the space. For all the benefits that we can offer please checkout out subscribe page, road map or <b>feel free to reach out by email</b> or on out socials!
                </Typography>

              </Grid>
            </Grid>
          </Box>

          <Box sx={{ width: "100%" }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>

            <Grid container spacing={10} direction="row"  >
              <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                <img src={switchl.switch ? backImg3 : backImg11} width="400" height="400" style={{ padding: 10 }} />
              </Grid>
              <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "200", fontSize: 25, paddingBottom: 20 }}>About the <span style={{ fontWeight: "900", fontSize: 25 }}> WL.</span></Typography>
                <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "200", fontSize: 30, }}>

                  Here at The <b>Whitelist</b>, we are dedicated to providing our community the <b>best art, utility</b> and <b>community</b> benefits, period.
                </Typography>
                <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 19, paddingTop: 10, lineHeight: 1.5 }}>
                  Here at The Whitelist, we are dedicated to providing our community the best art, utility and community benefits, period. No More grinding to get a whitelist spot on a good project. We Bring the Good Projects to you. We provide a wide range of options to users who are looking at different <b>levels of engagement and utility. </b>
                  Are priority is giving back to the community and its Holders of a Season pass, or an NFT from one of our collections in ways that has yet to been seen in the space. For all the benefits that we can offer please checkout out subscribe page, road map or <b>feel free to reach out by email</b> or on out socials!
                </Typography>

              </Grid>
            </Grid>
          </Box>
        </section>
        <section style={{ width: "100%", height: "auto", backgroundColor: "inherit", marginBottom: -20 }}>
          <div style={{ backgroundColor: switchl.switch ? "#EAF7FF" : "#1B1F31", position: "relative" }}>
            <img src={switchl.switch ? backImg4 : backImg12} width="100%" height="300" style={{ padding: 10 }} />
            <div style={{ position: "absolute", top: "20%", left: 0, bottom: 0, right: 0, textAlign: "center" }}>
              <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 50 }}>Collections</Typography>
            </div>
            <div style={{ position: "absolute", top: "40%", left: 0, bottom: 0, right: 0, textAlign: "center", paddingLeft: "5%", paddingRight: "5%" }}>
              <Typography color="primary" style={{ fontWeight: "300", fontSize: 15, }}>Join the Whitelist by choose the option below that fits you best. </Typography>
            </div>


          </div>
          <Box sx={{ width: "100%" }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
            <div style={{ position: "relative", bottom: 130 }}>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                arrows={true}
                keyBoardControl={false}
                //customTransition="all .5"
                // customLeftArrow={
                // <ArrowBackIosIcon style={{ color: "#fff" }} />}
                // customRightArrow={ <ArrowBackIosIcon style={{ color: "#fff" }} />}
                transitionDuration={0}
               // containerClass="carousel-containerr"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-pxrn"

              >
                <Card elevation={0} className={classes.card}>
                  <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", padding: "4%", fontSize: 20 }}>WL. Fractional Friends</Typography>
                  <CardMedia
                    className={classes.media}
                    image={backImg5}

                  />
                </Card>
                <Card elevation={0} className={classes.card}>
                  <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", padding: "4%", fontSize: 20 }}>WL. Fractional Friends</Typography>
                  <CardMedia
                    className={classes.media}
                    image={backImg6}

                  />
                </Card>
                <Card elevation={0} className={classes.card}>
                  <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", padding: "4%", fontSize: 20 }}>WL. Fractional Friends</Typography>
                  <CardMedia
                    className={classes.media}
                    image={backImg7}

                  />
                </Card>


              </Carousel>

            </div>
          </Box>

          <Box sx={{ width: "100%" }} pt={5} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
            <div style={{ position: "relative", bottom: 130 }}>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                arrows={true}
                keyBoardControl={false}
                //customTransition="all .5"
                // customLeftArrow={
                // <ArrowBackIosIcon style={{ color: "#fff" }} />}
                // customRightArrow={ <ArrowBackIosIcon style={{ color: "#fff" }} />}
                transitionDuration={0}
                //containerClass="carousel-containerrr"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-pxxx"

              >
                <Card elevation={0} className={classes.card}>
                  <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", padding: "4%", fontSize: 20 }}>WL. Fractional Friends</Typography>
                  <CardMedia
                    className={classes.media}
                    image={backImg5}

                  />
                </Card>
                <Card elevation={0} className={classes.card}>
                  <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", padding: "4%", fontSize: 20 }}>WL. Fractional Friends</Typography>
                  <CardMedia
                    className={classes.media}
                    image={backImg6}

                  />
                </Card>
                <Card elevation={0} className={classes.card}>
                  <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", padding: "4%", fontSize: 20 }}>WL. Fractional Friends</Typography>
                  <CardMedia
                    className={classes.media}
                    image={backImg7}

                  />
                </Card>


              </Carousel>

            </div>
          </Box>
        </section>

        <section style={{ width: "100%", height: "auto", backgroundColor: "inherit" }}>

          <div style={{ position: "relative", textAlign: "center", marginBottom: -36 }}>
            <img src={backImg8} width="70" height="70" style={{ left: 60, position: "relative" }} />
            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", bottom: 55, position: "relative" }}>Subscribe</Typography>

          </div>
          <div>
            <Typography color="primary" style={{ fontWeight: "200", fontSize: 15, textAlign: "center" }}>Join the Whitelist by choose your perfect option below</Typography>
          </div>
          <Box sx={{ width: "100%" }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
          <div style={{ position: "relative", margin: "5%" }}>
            <img src={backImg15} style={{ width: "100%" }} />
            <Card elevation={0} className={classes.cardnt}>
              <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", color: "#FFA901", bottom: 55, position: "relative" }}>Coming Soon</Typography>
              <div>
                <Typography color="primary" style={{ fontWeight: "200", fontSize: 15, textAlign: "center", bottom: 30, position: "relative" }}>Join us in...</Typography>
              </div>
              <div style={{ display: "flex" }}>
                <div >
                  <div style={{ display: "flex", marginRight: 10 }}>
                    <div className={classes.date} >
                      <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>0</Typography>
                    </div>
                    <div className={classes.date}>
                      <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>5</Typography>
                    </div>
                  </div>
                  <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>DAYS</Typography>
                </div>
                <div >
                  <div style={{ display: "flex", marginRight: 10 }}>
                    <div className={classes.date}>
                      <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>2</Typography>
                    </div>
                    <div className={classes.date}>
                      <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>6</Typography>
                    </div>
                  </div>
                  <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>HOURS</Typography>
                </div>
                <div >
                  <div style={{ display: "flex" }}>
                    <div className={classes.date}>
                      <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>1</Typography>
                    </div>
                    <div className={classes.date}>
                      <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 60 }}>9</Typography>
                    </div>
                  </div>
                  <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>MINUTES</Typography>
                </div>
              </div>

              <div style={{ marginTop: 30 }}>
                <FormControl variant="outlined"  fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">Early access code</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"

                    endAdornment={
                      <InputAdornment position="end">
                        <Button variant="contained" className={classes.buttonnn} color="red"> Submit</Button>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>

              </div>

            </Card>
          </div>
          </Box>

          <Box sx={{ width: "100%" }} pt={5} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
          <div >
           
            <Card elevation={0} className={classes.cardntt}>
              <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 30, textAlign: "center", color: "#FFA901",  position: "relative" }}>Coming Soon</Typography>
              <div>
                <Typography color="primary" style={{ fontWeight: "200", fontSize: 15, textAlign: "center",  position: "relative" }}>Join us in...</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                    <div >
                      <div style={{ display: "flex", marginRight: 10 }}>
                        <div className={classes.date} >
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>0</Typography>
                        </div>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>5</Typography>
                        </div>
                      </div>
                      <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>DAYS</Typography>
                    </div>
                    <div >
                      <div style={{ display: "flex", marginRight: 10 }}>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>2</Typography>
                        </div>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>6</Typography>
                        </div>
                      </div>
                      <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>HOURS</Typography>
                    </div>
                    <div >
                      <div style={{ display: "flex" }}>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>1</Typography>
                        </div>
                        <div className={classes.date}>
                          <Typography color="secondary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 40 }}>9</Typography>
                        </div>
                      </div>
                      <Typography color="primary" style={{ fontWeight: "400", fontSize: 15, textAlign: "center", paddingTop: 5 }}>MINUTES</Typography>
                    </div>
                  </div>

              <div style={{ marginTop: 30 }}>
                <FormControl variant="outlined"  fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">Early access code</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"

                    endAdornment={
                      <InputAdornment position="end">
                        <Button variant="contained" className={classes.buttonnn} color="red"> Submit</Button>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>

              </div>

            </Card>
          </div>
          </Box>



        </section>
        <section style={{ width: "100%", height: "auto", backgroundColor: "inherit", marginBottom: 100 }}>
          <div style={{ position: "relative", textAlign: "center", marginBottom: -36, marginTop: 50, }}>
            <img src={backImg9} width="70" height="70" style={{ left: 60, position: "relative" }} />
            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", bottom: 55, position: "relative" }}>Let us help</Typography>

          </div>

          <div>
            <Typography color="primary" style={{ fontWeight: "200", fontSize: 17, textAlign: "center", padding: 10 }}>Find the Most Frequently asked questions and there answers right here</Typography>
          </div>
          <Card elevation={0} className={classes.cardn}>
            <div>
              <Typography color="primary" style={{ fontWeight: "700", fontSize: 19, paddingBottom: 10 }}>Does the Whitelist have a roadmap?</Typography>
              <a href="#" ><b>Roadmap</b></a>
            </div>
          </Card>

          <Card elevation={0} className={classes.cardn}>
            <div>
              <Typography color="primary" style={{ fontWeight: "700", fontSize: 19, }}>What does My Subscription get me?</Typography>
              <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10, }}>Depending on the tier you have decided to go with, every tier unlocks certain perks and advantages. Visit (Link to subscriptions) to find out more.</Typography>
            </div>
          </Card>

          <Card elevation={0} className={classes.cardn}>
            <div>
              <Typography color="primary" style={{ fontWeight: "700", fontSize: 19, }}>Can I Buy, sell or trade my Tier Pass?</Typography>
              <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10, }}>When you purchase a subscription through The Whitelist you will receive your own Unique NFT pass. The whitelist has 3 tier options to pick from. Choose wisely 😉</Typography>
            </div>
          </Card>

          <Card elevation={0} className={classes.cardn}>
            <div>
              <Typography color="primary" style={{ fontWeight: "700", fontSize: 19, }}>Do we have social media?</Typography>
              <Typography color="primary" style={{ fontWeight: "300", fontSize: 17, paddingTop: 10, }}>You can find us and our community on Discord, Twitter and Instagram!</Typography>
            </div>
          </Card>


        </section>
      </Grid >

    );
  }
}
Home.propTypes = {
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
), withStyles(useStyles))(Home);