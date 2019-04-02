import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavbarTogglerStyled, NavbarTogglerContainer, NavbarTogglerIndicator } from './Style';
import { FaAngleRight } from 'react-icons/fa';
import Swipe from 'react-easy-swipe';

class NavbarToggler extends PureComponent {

  render() {
    const {onSwipeLeft, onSwipeRight, onClick, currentMode} = this.props
    return (
      <Swipe onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
        <NavbarTogglerContainer onClick={onClick}>
          <NavbarTogglerIndicator currentMode={currentMode}>
            <FaAngleRight/>
          </NavbarTogglerIndicator>
          <NavbarTogglerStyled currentMode={currentMode}/>
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
