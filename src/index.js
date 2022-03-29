import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import HowItWork from './Howitwork';
import Subscribe from './Subscribe';
import Roadmap from './Roadmap'
import MeetTeam from './MeetTeam';
import YourCollections from './YourCollections';
import Collections from './Collections'
import Checkout from './Checkout';
import backImg14 from "./images/Vector (4).png";
import backImg13 from "./images/Path 12342.png";
import backImg9 from "./images/Vector (1).png";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" style={{ marginTop: 50 }} alignItems="center" flexDirection="column">
      <Box width="30%" mr={1}>
        <LinearProgress variant="determinate" color="primary" {...props} />
      </Box>
      <Box minWidth={35} mt={2} mb={2}>
        <Typography variant="body2" color="textSecondary"><b>{`${Math.round(
          props.value,
        )}%`}</b></Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}

const Load = () => {

  return (

    <>
      <Box sx={{ width: "100%" }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        <div className="loadingBg">
          <div style={{ position: "relative" }}>
            <img src={backImg14} width="100%" style={{ position: "relative" }} />
            <img src={backImg13} width="auto" height="auto" style={{ bottom: 400, left: 100, position: "relative" }} />
          </div>
<div style={{position: "relative", bottom: 300}}>
          <div style={{ justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", position: "relative", bottom: "50%" }}>
            <img src={backImg9} height="30" width="70" />
          </div>

          <div style={{ justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", position: "relative", bottom: "50%" }}>
            <LinearWithValueLabel />
          </div>

          <div style={{ justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", position: "relative", bottom: "50%" }}>
            <Typography variant="body2" color="textSecondary">Please Wait</Typography>
          </div>
          </div>
        </div>
      </Box>
      <div className="loadingBg">
        <Box sx={{ width: "100%" }} pt={5} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
          <div style={{ position: "relative" }}>
            <img src={backImg14} width="100%" style={{ position: "relative" }} />
            <img src={backImg13} width="auto" height="auto" style={{ bottom: 400, left: 100, position: "relative" }} />
          </div>

          <div style={{ justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", position: "relative", bottom: "50%" }}>
            <img src={backImg9} height="30" width="70" />
          </div>

          <div style={{ justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", position: "relative", bottom: "50%" }}>
            <LinearWithValueLabel />
          </div>

          <div style={{ justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", position: "relative", bottom: "50%" }}>
            <Typography variant="body2" color="textSecondary">Please Wait</Typography>
          </div>
        </Box>
      </div>
    </>

  )


}
class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 8000);
  }
  render() {
    return (

      <Provider store={store}>
        <BrowserRouter basename={'/'} >
          <ScrollContext>
            <Switch>
              <PersistGate persistor={persistor} >
                {this.state.loading == false ?
                  <App>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
                    <Route exact path={`${process.env.PUBLIC_URL}/how-it-works`} component={HowItWork} />
                    <Route exact path={`${process.env.PUBLIC_URL}/subscribe`} component={Subscribe} />
                    <Route exact path={`${process.env.PUBLIC_URL}/roadmap`} component={Roadmap} />
                    <Route exact path={`${process.env.PUBLIC_URL}/meet-the-team`} component={MeetTeam} />
                    <Route exact path={`${process.env.PUBLIC_URL}/my-collections`} component={YourCollections} />
                    <Route exact path={`${process.env.PUBLIC_URL}/collections`} component={Collections} />
                    <Route exact path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout} />

                  </App>
                  : <Load />
                }
              </PersistGate>
            </Switch>
          </ScrollContext>
        </BrowserRouter>
      </Provider>

    );

  }
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
ReactDOM.render(<Root />, document.getElementById('root'));
