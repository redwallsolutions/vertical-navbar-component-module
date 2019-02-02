import React from 'react';
import {render} from "react-dom";

import VerticalNavbar from './lib/VerticalNavbar';
import {GlobalStyle} from './lib/Style';

import {MdDashboard, MdTune, Md3dRotation,} from 'react-icons/md';

const items = [
  {
    icon: <MdDashboard size='2.4em'/>,
    title: 'Visão Geral',
    subTitle: 'Tenha acesso rápido a todas as funcionalidades.',
    onClick: (e) => {
      console.log(e);
    }
  }, {
    icon: <MdTune size='2.4em'/>,
    title: 'Other Thing',
    subTitle: 'Some description to "other thing".',
  }, {
    icon: <Md3dRotation size='2.4em'/>,
    title: 'Rotation',
    subTitle: 'A test about rotation app.',
  },
]

const App = () => (<React.Fragment>
  <GlobalStyle/>
  <VerticalNavbar items={items
  }>
  </VerticalNavbar>
</React.Fragment>);

render(<App/>, document.getElementById("root"));
