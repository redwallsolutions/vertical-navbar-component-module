import React from 'react';
import { render } from "react-dom";

import VerticalNavbar from './lib/VerticalNavbar';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MdDashboard, MdTune, Md3dRotation, MdTv, MdAccessibility, MdAccountBalance, MdSms } from 'react-icons/md';
import DashPage from 'dash-page-component-module';

const ResetCSS = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const items = [{
  icon: <MdDashboard size='1.9em'/>,
  title: 'Visão Geral',
  subTitle: 'Tenha acesso rápido a todas as funcionalidades.',
  onClick: (e) => {
    console.log(e);
  }
}, {
  icon: <MdTune size='1.9em'/>,
  title: 'Other Thing',
  notificationCount: 4
}, {
  icon: <Md3dRotation size='1.9em'/>,
  title: 'Rotation',
  subTitle: 'A test about rotation app.',
}, {
  icon: <MdTv size='1.9em'/>,
  title: 'Other Thing',
}, {
  icon: <MdAccessibility size='1.9em'/>,
  title: 'Rotation',
  subTitle: 'A test about rotation app.',
}, {
  icon: <MdAccountBalance size='1.9em'/>,
  title: 'Other Thing',
}, {
  icon: <MdSms size='1.9em'/>,
  title: 'SMS',
},  {
  icon: <Md3dRotation size='1.9em'/>,
  title: 'Rotation',
  subTitle: 'A test about rotation app.',
}, {
  icon: <MdTv size='1.9em'/>,
  title: 'Other Thing',
}, {
  icon: <MdAccessibility size='1.9em'/>,
  title: 'Rotation',
  subTitle: 'A test about rotation app.',
}, {
  icon: <MdAccountBalance size='1.9em'/>,
  title: 'Other Thing',
}, {
  icon: <MdSms size='1.9em'/>,
  title: 'SMS',
}]


class App extends React.Component {

  setVerticalNavbarController = (verticalNavbarController) => {
    this.verticalNavbarController = verticalNavbarController;
    setTimeout(() => {
      this.verticalNavbarController.setItem(0);
    }, 1000);
  }

  render() {
    return (
      <ThemeProvider theme={{mode:'dark', primaryContrastDark: '#2b324c', primaryDark: '#ebebeb' }}>
        <React.Fragment>
          <ResetCSS/>
          <VerticalNavbar items={items} getVerticalNavbarController={this.setVerticalNavbarController}>
            <DashPage>
              <React.Fragment>
                <div style={{height: '100vh'}}>OI</div>
                <div style={{height: '100vh'}}>OI</div>
                <div style={{height: '100vh'}}>OI</div>
              </React.Fragment>
            </DashPage>
          </VerticalNavbar>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

render(<App/>, document.getElementById("root"));
