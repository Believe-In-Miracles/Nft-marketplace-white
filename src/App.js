import React, { Component, Fragment } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import compose from "recompose/compose"
import Header from './Header';
import Footer from './Footer'
import { Preloader, Placeholder } from 'react-preloading-screen';
class App extends Component {

  render() {
    const {switchl} = this.props
    const themeLight = createTheme({
      palette: {
        background: {
          default: "#f8f8fb"
        },
        primary: {
          main: "#1F194D"
        },
        secondary: {
          main: "#fff"
        },
        cardBg: {
          main: "#fff",
          contrastText: "#1F194D"
        },
        date: {
          main: "#1d222f"
        },
        walletBtn: {
          main: "rgba(25, 91, 255, 0.13)"
        },
        walletIcn: {
          main: "#195BFF"
        },
        footerBg: {
          main: "#1553CB"
        },
        boxShadow: {
          main: "20px 20px 50px 15px #D0D0D0"
        }
      },
      typography: {
        "fontFamily": `"Cairo", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
       }
    
    });
    
    const themeDark = createTheme({
      palette: {
        background: {
          default: "#111318"
        },
        primary: {
          main: "#ffffff"
        },
        secondary: {
          main: "#fff"
        },
        cardBg: {
          main: "#292A37",
          contrastText: "#ffffff"
        },
        date: {
          main: "#353B57"
        },
        walletBtn: {
          main: "rgba(255, 255, 255, 0.13)"
        },
        walletIcn: {
          main: "#fff"
        },
        footerBg: {
          main: "#3E4058"
        },
        boxShadow: {
          main: "20px 20px 50px 15px #292828"
        }
      },
      typography: {
        "fontFamily": `"Cairo", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
       }
    });
    return (
      <ThemeProvider theme={switchl.switch ? themeLight : themeDark}>
      <Header/>
      <div style={{overflowX: "hidden"}}>
       {this.props.children}
       </div>
       <Footer/>
      </ThemeProvider>
    )
    }
  }
  const mapStateToProps = state => {
    return {
      switchl: state.switch,
  
    };
  };
export default compose(connect(
  mapStateToProps,
  null
))(App);