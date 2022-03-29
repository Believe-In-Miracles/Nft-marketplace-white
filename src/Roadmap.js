import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import { styled } from '@material-ui/core/styles';
import { Box, Divider } from '@material-ui/core';
import Card from "@material-ui/core/Card";
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
    card: {

        backgroundColor: theme.palette.cardBg.main,
        borderRadius: 10,
        padding: 20,
        margin: 15

    },
    roott: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },

})

const ColorlibConnector = styled(StepConnector)({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundColor:
                'red',
        },
    },
    completed: {
        '& $line': {
            backgroundColor:
                "#fff",
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
});



const steps = [

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, textAlign: "center", }}>UI and Site Development</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, textAlign: "center", }}>Advisory and team build out
    </Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, textAlign: "center", }}>Community structure</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, textAlign: "center", }}>Site Drop</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, textAlign: "center", }}>Voting system implementation</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, textAlign: "center", }}>Prize pool announcement</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, textAlign: "center", }}>Open The Whitelist for Subscriptions</Typography>,



]

const stepsm = [

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, }}>UI and Site Development</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, }}>Advisory and team build out
    </Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, }}>Community structure</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, }}>Site Drop</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, }}>Voting system implementation</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, }}>Prize pool announcement</Typography>,

    <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "300", fontSize: 13, }}>Open The Whitelist for Subscriptions</Typography>,



]
const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 30,
        height: 30,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor:
            ' #FFA901',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundColor:
            '#2BD182',
    }
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <Check />,
        2: <Check />,
        3: <Check />,
        4: <Check />,
        5: <Check />,
        6: <Check />,
        7: <Check />
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

function ColorlibStepIcon1(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <Check />,
        2: <Check />,

    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );

}

function ColorlibStepIcon2(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {


    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );

}
ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};



class Roadmap extends Component {
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
                <section style={{ backgroundColor: switchl.switch ? "#EAF7FF" : "#1B1F31", height: "auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "10%", marginBottom: 30 }}>


                    <div style={{ position: "relative", textAlign: "center", top: "30%" }}>
                        <img src={backImg9} width="70" height="70" style={{ left: 60, position: "relative" }} />
                        <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 34, textAlign: "center", bottom: 55, position: "relative" }}>Roadmap</Typography>

                    </div>
                </section>

                <section style={{ width: "100%", height: "auto", backgroundColor: "inherit", marginBottom: 100 }}>



                    <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} >
                        <Card elevation={5} className={classes.card} style={{marginBottom: 50}}>
                            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 30, left: 60, position: "relative" }}>Q1 <span style={{ fontWeight: "200", fontSize: 20 }}> 2022</span></Typography>
                            <Stepper alternativeLabel activeStep={7} style={{ backgroundColor: "inherit" }} connector={<ColorlibConnector />}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Card>

                        <Card elevation={5} className={classes.card} style={{marginBottom: 50}}>
                            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 30, left: 60, position: "relative" }}>Q2 <span style={{ fontWeight: "200", fontSize: 20 }}> 2022</span></Typography>
                            <Stepper alternativeLabel activeStep={2} style={{ backgroundColor: "inherit" }} connector={<ColorlibConnector />}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon1}>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Card>

                        <Card elevation={5} className={classes.card} style={{marginBottom: 50}}>
                            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 30, left: 60, position: "relative" }}>Q3 <span style={{ fontWeight: "200", fontSize: 20 }}> 2022</span></Typography>
                            <Stepper alternativeLabel activeStep={-1} style={{ backgroundColor: "inherit" }} connector={<ColorlibConnector />}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon2}>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Card>

                        <Card elevation={5} className={classes.card} style={{marginBottom: 50}}>
                            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 30, left: 60, position: "relative" }}>Q4 <span style={{ fontWeight: "200", fontSize: 20 }}> 2022</span></Typography>
                            <Stepper alternativeLabel activeStep={-1} style={{ backgroundColor: "inherit" }} connector={<ColorlibConnector />}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon2}>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Card>
                    </Box>

                    <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                        <Card elevation={5} className={classes.card} style={{marginBottom: 50}}>
                            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 30, left: 30, position: "relative" }}>Q1 <span style={{ fontWeight: "200", fontSize: 20 }}> 2022</span></Typography>
                            <Stepper activeStep={7} style={{ backgroundColor: "inherit" }} connector={<ColorlibConnector />} orientation="vertical">
                                {stepsm.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>

                                    </Step>
                                ))}

                            </Stepper>
                        </Card>

                        <Card elevation={5} className={classes.card} style={{marginBottom: 50}}>
                            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 30, left: 30, position: "relative" }}>Q2 <span style={{ fontWeight: "200", fontSize: 20 }}> 2022</span></Typography>
                            <Stepper activeStep={2} style={{ backgroundColor: "inherit" }} connector={<ColorlibConnector />} orientation="vertical">
                                {stepsm.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon1}>{label}</StepLabel>

                                    </Step>
                                ))}

                            </Stepper>
                        </Card>

                        <Card elevation={5} className={classes.card} style={{marginBottom: 50}}> 
                            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 30, left: 30, position: "relative" }}>Q3 <span style={{ fontWeight: "200", fontSize: 20 }}> 2022</span></Typography>
                            <Stepper activeStep={-1} style={{ backgroundColor: "inherit" }} connector={<ColorlibConnector />} orientation="vertical">
                                {stepsm.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon2}>{label}</StepLabel>

                                    </Step>
                                ))}

                            </Stepper>
                        </Card>

                        <Card elevation={5} className={classes.card} style={{marginBottom: 50}}>
                            <Typography color="primary" variant="h1" component="h2" style={{ fontWeight: "900", fontSize: 30, left: 30, position: "relative" }}>Q4 <span style={{ fontWeight: "200", fontSize: 20 }}> 2022</span></Typography>
                            <Stepper activeStep={-1} style={{ backgroundColor: "inherit" }} connector={<ColorlibConnector />} orientation="vertical">
                                {stepsm.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon2}>{label}</StepLabel>

                                    </Step>
                                ))}

                            </Stepper>
                        </Card>
                    </Box>
                </section>

            </Grid >

        );
    }
}
Roadmap.propTypes = {
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
), withStyles(useStyles))(Roadmap);