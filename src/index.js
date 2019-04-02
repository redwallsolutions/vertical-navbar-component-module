import React from 'react';
import { render } from "react-dom";

import VerticalNavbar from './lib/VerticalNavbar';
import { GlobalStyle, DefaultFont } from './lib/Style';

import { MdDashboard, MdTune, Md3dRotation, } from 'react-icons/md';

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
}, ]


class App extends React.Component {

  setVerticalNavbarController = (verticalNavbarController) => {
    this.verticalNavbarController = verticalNavbarController;
    setTimeout(() => {
      this.verticalNavbarController.setItem(0);
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
        <VerticalNavbar items={items} getVerticalNavbarController={this.setVerticalNavbarController}>
          Lorem ipsum
        </VerticalNavbar>
      </React.Fragment>
    )
  }
}

render(<App/>, document.getElementById("root"));
