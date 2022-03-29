import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from '@material-ui/core/Container'
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import { blueGrey, pink } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import {
    Grid,
    Paper,
    TextField

} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import './App.css'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types'
import InputOutlinedIcon from '@material-ui/icons/InputOutlined';
import Divider from '@material-ui/core/Divider';
import { Link, Redirect } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import backImg10 from "./images/Vector (3).png";
const useStyles = theme => ({
    media: {
        height: 140,
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 800,
        height: 50
    },
    footer: {
        width: '100%',
        height: 'auto',
        backgroundColor: theme.palette.footerBg.main,
        marginBottom: -25,
        marginTop: -35,

    }
})

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const responsive1 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const primary = '#0091D5'; // #f44336 
const background = grey[100]; // #f44336
const text1 = blueGrey[500]; // #f44336
const text2 = blueGrey[900]; // #f44336
const pinkColor = '#C45597'
const MyButton = styled(Button)({
    background: pinkColor,
    border: 0,

    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    color: 'white',
    width: '100%',
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: primary
    }

});
const MyButton3 = styled(Button)({
    background: pinkColor,


    boxShadow: 5,
    color: '#fff',

    fontSize: 15,
    width: '100%',
    height: 47,
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: pinkColor
    }

});
class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {



    }

    componentWillUnmount() {

    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() { }

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.footer}>

                <Box mt={4} mb={3}>
                    <Divider style={{ color: '#000' }} />
                </Box>
                <Box mt={4}>
                    <Container maxWidth="md">
                        <Grid container >
                            <Grid item md={12} xm={12} xs={12} lg={4} xl={4}>
                                <Link to={`${process.env.PUBLIC_URL}/`} style={{ color: 'inherit', textDecoration: 'inherit' }}>

                                    <img src={backImg10} height="30" width="70" />
                                </Link>
                                <div style={{marginTop: 30}}>
                                <Typography style={{ fontWeight: "200", fontSize: 15, color: "#fff" }}>Follow Us On Social Media</Typography>
                                <FacebookIcon style={{ color: "#fff", marginRight: 10 }} />
                                <LinkedInIcon style={{ color:  "#fff", marginRight: 10 }} />
                                <InstagramIcon style={{ color:  "#fff", marginRight: 10 }} />
                                <TwitterIcon style={{ color:  "#fff", marginRight: 10 }} />
                                </div>

                            </Grid>
                            <Grid item md={12} xm={12} xs={12} lg={4} xl={4}>
                            <Typography style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>The Whitelist Info</Typography>
                            <div style={{marginTop: 30, display: "flex"}}>
                            <div  >
                            <Link to="/subscribe" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <Typography style={{ fontWeight: "200", fontSize: 13, color: "#fff" }}>Subscribe</Typography>
                           </Link>
                            <Link to="/roadmap" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <Typography style={{ fontWeight: "200", fontSize: 13, color: "#fff" }}>Roadmap</Typography>
                            </Link>
                            <Link to="/how-it-works" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <Typography style={{ fontWeight: "200", fontSize: 13, color: "#fff" }}>How it works</Typography>
                            </Link>
                           </div>
                            <div>
                            <Typography style={{ fontWeight: "200", fontSize: 13, color: "#fff" }}>Upcoming Drops</Typography>
                            <Link to="/meet-the-team" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <Typography style={{ fontWeight: "200", fontSize: 13, color: "#fff" }}><b>Meet The Team</b></Typography>
                           </Link>
                            </div>
                             </div>
                            </Grid>


                            <Grid item md={12} xm={12} xs={12} lg={4} xl={4}>
                            <Typography style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>Join Newsletter</Typography>
                            <div style={{marginTop: 30,}}>
                            <Typography style={{ fontWeight: "200", fontSize: 15, color: "#fff" }}>Subscribe to our newsletter to get latest <b>W</b> updates</Typography>
                            </div>
                            </Grid>
                        </Grid>

                    </Container>
                </Box>
                <Box mt={2} mb={3}>
                    <Divider style={{ color: '#000' }} />
                </Box>
                <Box mt={2} mb={3} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Typography variant="body2" component="p" style={{ textAlign: 'center', color: "#fff" }}>
                        Copyright © 2022. All rights reserved.
                    </Typography>
                </Box>
            </div>


        )
    }
}
Footer.propTypes = {
    Classes: PropTypes.object.isRequired,
}

export default (withStyles)(useStyles)(Footer)