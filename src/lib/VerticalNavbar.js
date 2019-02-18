import React, { Component } from 'react';
import { DefaultFont } from './Style';
import VerticalNavbarComponent from './VerticalNavbarComponent';
class VerticalNavbar extends Component {

  render() {
    return (
      <React.Fragment>
        <DefaultFont/>
        <VerticalNavbarComponent {...this.props}/>
      </React.Fragment>
    );
  }

}

export default VerticalNavbar;
