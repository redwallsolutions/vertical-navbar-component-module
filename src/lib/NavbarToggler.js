import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavbarTogglerStyled, NavbarTogglerContainer } from './Style';
import Swipe from 'react-easy-swipe';

class NavbarToggler extends PureComponent {

  render() {
    const {onSwipeLeft, onSwipeRight, onClick} = this.props
    return (
      <Swipe onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
        <NavbarTogglerContainer onClick={onClick}>
          <NavbarTogglerStyled />
        </NavbarTogglerContainer>
      </Swipe>
    );
  }

}

NavbarToggler.propTypes = {
  isShown: PropTypes.bool,
  onClick: PropTypes.func
}
export default NavbarToggler;
