import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavbarTogglerStyled, HumbBar } from './Style';

class NavbarToggler extends PureComponent {

  buildHumbBars = () => {
    const humbClasses = ['top', 'middle', 'bottom'];
    return humbClasses.map(humbClass => (
      <HumbBar className={humbClass}/>
    ));
  }

  render() {
    const {onClick, ...rest} = this.props;
    return (
      <NavbarTogglerStyled onClick={onClick} {...rest}>
        {this.buildHumbBars()}
      </NavbarTogglerStyled>
    );
  }

}

NavbarToggler.propTypes = {
  isShown: PropTypes.bool,
  onClick: PropTypes.func
}
export default NavbarToggler;
