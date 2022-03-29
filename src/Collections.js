import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import compose from "recompose/compose"
import backImg5 from "./images/Group 43169 (1).png";
import backImg6 from "./images/Rectangle 19.png";
import backImg7 from "./images/Rectangle 18.png";
import backImg9 from "./images/Ellipse 2.png";
import backImg10 from "./images/Ellipse 5 (4).png";
import * as actions from './redux/actions';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



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



class Collections extends Component {
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


                    <div style={{ position: "relative", textAlign: "center", top: "30%" }}>
                        <img src={backImg9} width="70" height="70" style={{ left: 60, position: "relative" }} />
                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", bottom: 55, position: "relative" }}>Collections</Typography>

                    </div>
                </section>

                <section style={{ width: "100%", height: "auto", backgroundColor: "inherit", marginTop: 20, marginBottom: 100 }}>

                    <Grid container spacing={5} direction="row"  >
                        <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                            <Card elevation={0} className={classes.cardn}>
                                <div style={{ display: "flex", gap: 20 }}>
                                    <div style={{ padding: 10 }}>
                                        <Avatar alt="Remy Sharp" src={backImg10} style={{ width: 100, height: 100 }} />
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 20, paddingTop: 20 }}>Passengers</Typography>

                                    </div>

                                    <div>
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
                                            
                                            transitionDuration={0}
                                            containerClass="carousel-containerss"
                                            // removeArrowOnDeviceType={["tablet", "mobile"]}
                                            deviceType={this.props.deviceType}
                                            dotListClass="custom-dot-list-style"


                                        >
                                            <img src={backImg5} style={{ marginRight: 0 }} width="200" height="200" />
                                            <img src={backImg6} width="200" height="200" />
                                            <img src={backImg7} width="200" height="200" />


                                        </Carousel>
                                    </div>

                                </div>
                                <Typography color="primary" style={{ fontWeight: "300", fontSize: 15, }}>View collection <ArrowForwardIcon style={{ top: 7, position: "relative" }} /> </Typography>


                            </Card>

                        </Grid>
                        <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                            <Card elevation={0} className={classes.cardn}>
                                <div style={{ display: "flex", gap: 20 }}>
                                    <div style={{ padding: 10 }}>
                                        <Avatar alt="Remy Sharp" src={backImg10} style={{ width: 100, height: 100 }} />
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 20, paddingTop: 20 }}>Passengers</Typography>

                                    </div>

                                    <div>
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
                                           // customTransition="all .5"
                                            transitionDuration={0}
                                            containerClass="carousel-containerss"
                                            removeArrowOnDeviceType={["tablet", "mobile"]}
                                            deviceType={this.props.deviceType}
                                            dotListClass="custom-dot-list-style"


                                        >
                                            <img src={backImg5} style={{ marginRight: 0 }} width="200" height="200" />
                                            <img src={backImg6} width="200" height="200" />
                                            <img src={backImg7} width="200" height="200" />


                                        </Carousel>
                                    </div>

                                </div>
                                <Typography color="primary" style={{ fontWeight: "300", fontSize: 15, }}>View collection <ArrowForwardIcon style={{ top: 7, position: "relative" }} /> </Typography>


                            </Card>

                        </Grid>
                        <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                            <Card elevation={0} className={classes.cardn}>
                                <div style={{ display: "flex", gap: 20 }}>
                                    <div style={{ padding: 10 }}>
                                        <Avatar alt="Remy Sharp" src={backImg10} style={{ width: 100, height: 100 }} />
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 20, paddingTop: 20 }}>Passengers</Typography>

                                    </div>

                                    <div>
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
                                            transitionDuration={0}
                                            containerClass="carousel-containerss"
                                             removeArrowOnDeviceType={["tablet", "mobile"]}
                                            deviceType={this.props.deviceType}
                                            dotListClass="custom-dot-list-style"


                                        >
                                            <img src={backImg5} style={{ marginRight: 0 }} width="200" height="200" />
                                            <img src={backImg6} width="200" height="200" />
                                            <img src={backImg7} width="200" height="200" />


                                        </Carousel>
                                    </div>

                                </div>
                                <Typography color="primary" style={{ fontWeight: "300", fontSize: 15, }}>View collection <ArrowForwardIcon style={{ top: 7, position: "relative" }} /> </Typography>


                            </Card>

                        </Grid>
                        <Grid item md={6} xs={12} sm={6} zeroMinWidth >
                            <Card elevation={0} className={classes.cardn}>
                                <div style={{ display: "flex", gap: 20 }}>
                                    <div style={{ padding: 10 }}>
                                        <Avatar alt="Remy Sharp" src={backImg10} style={{ width: 100, height: 100 }} />
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 20, paddingTop: 20 }}>Passengers</Typography>

                                    </div>

                                    <div>
                                        <Carousel
                                            swipeable={true}
                                            draggable={true}
                                            showDots={false}
                                            responsive={responsive}
                                            ssr={true} // means to render carousel on server-side.
                                            infinite={true}
                                            autoPlay={false}
                                            arrows={false}

                                            keyBoardControl={false}
                                            //customTransition="all .5"
                                            transitionDuration={0}
                                            containerClass="carousel-containerss"
                                            removeArrowOnDeviceType={["tablet", "mobile"]}
                                            deviceType={this.props.deviceType}
                                            dotListClass="custom-dot-list-style"


                                        >
                                            <img src={backImg5} style={{ marginRight: 0 }} width="200" height="200" />
                                            <img src={backImg6} width="200" height="200" />
                                            <img src={backImg7} width="200" height="200" />


                                        </Carousel>
                                    </div>

                                </div>
                                <Typography color="primary" style={{ fontWeight: "300", fontSize: 15, }}>View collection <ArrowForwardIcon style={{ top: 7, position: "relative" }} /> </Typography>


                            </Card>

                        </Grid>


                    </Grid>




                </section>

            </Grid>

        );
    }
}
Collections.propTypes = {
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
), withStyles(useStyles))(Collections);