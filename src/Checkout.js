import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import compose from "recompose/compose"
// Import your background image in images folder
import backImg2 from "./images/image 10.png";
import backImg3 from "./images/Rectangle 1.png";
import backImg9 from "./images/Ellipse 2.png";
import * as actions from './redux/actions';
import PropTypes from 'prop-types';
import 'react-multi-carousel/lib/styles.css';
import Button from '@material-ui/core/Button';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';



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
        },
        overflow: "scroll"


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
        color: "#fff",
        fontWeight: "bold",
        padding: "5%",
        width: 100,
        '&:hover': {
            backgroundColor: "#195BFF"
        }
    },

})



class Checkout extends Component {
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
                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", bottom: 55, position: "relative" }}>Checkout</Typography>

                    </div>
                </section>

                <section style={{ width: "100%", height: "auto", backgroundColor: "inherit", marginTop: 20, marginBottom: 100 }}>


                    <Card elevation={0} className={classes.cardn}>
                        <div style={{ display: "flex", }}>
                            <div>
                                <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 25, paddingTop: 20 }}>Process & Complete</Typography>
                                <div style={{ padding: 10, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>



                                    <div style={{ padding: "10%" }}>
                                        <Typography color="primary" style={{ fontWeight: "400", fontSize: 17, textAlign: "center", padding: 10 }}>Transfer the amount to the following wallet and wait for the confirmation message</Typography>
                                    </div>
                                    <div>
                                        <img src={backImg2} width="200" height="200" />
                                    </div>
                                    <div>

                                    </div>
                                </div>

                                <div>

                                </div>
                                <div>
                                    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 17, paddingTop: 20 }}>Wallet Address</Typography>
                                    <Typography color="primary" style={{ fontWeight: "400", fontSize: 17, paddingTop: 5, }}>Transfer to Wallet Address</Typography>
                                </div>
                                <div>
                                    <Button startIcon={<FileCopyIcon />} endIcon={<Button variant="contained" className={classes.buttonn} color="red"> Copy</Button>}
                                        style={{ textAlign: "center", }}>1vtWSBkSF3wiuy1fN2UPx1Zn5nN2jszSf</Button>
                                </div>
                            </div>

                            <div>
                                <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 25, paddingTop: 20 }}>Summary</Typography>
                                <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
                                    <div>
                                        <img src={backImg3} width="150" height="150" />
                                    </div>
                                    <div>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 20, paddingTop: 20 }}>Season 1</Typography>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 15, paddingTop: 20 }}>Tier 3 (The Inner Circle)</Typography>
                                        <div style={{ marginTop: 40 }}>
                                            <b><a href="/view-item">View Item</a></b>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: 30, background: " rgba(221, 221, 230, 0.25)", marginTop: 40 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignContent: "space-between" }}>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", fontSize: 15, paddingTop: 20, top: 5, position: "relative" }}>Season 1</Typography>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 20, paddingTop: 20 }}>0.6 ETH</Typography>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignContent: "space-between" }}>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "400", fontSize: 15, paddingTop: 20, top: 5, position: "relative" }}>Gas</Typography>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 20, paddingTop: 20 }}>0.02 ETH</Typography>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignContent: "space-between" }}>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "700", fontSize: 20, paddingTop: 20, top: 5, position: "relative", color: "#2BD182" }}>Total</Typography>
                                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 20, paddingTop: 20 }}>0.62 ETH</Typography>
                                    </div>

                                    <div style={{marginTop: 30}}>
                                        <FormControl  variant="outlined" >
                                            <InputLabel htmlFor="outlined-adornment-password">Promo Code</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                       <Button variant="contained" className={classes.buttonn} color="red"> Submit</Button>
                                                    </InputAdornment>
                                                }
                                                labelWidth={70}
                                            />
                                        </FormControl>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </Card>






                </section>

            </Grid>

        );
    }
}
Checkout.propTypes = {
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
), withStyles(useStyles))(Checkout);