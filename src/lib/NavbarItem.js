import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {NavbarItemStyled, NavbarLastItemStyled, NavbarItemBadge} from './Style';
class NavbarItem extends PureComponent {

  onClick = (e) => {
    this.props.onClick({id: this.props.id, onClick: this.props.customOnClick, ...e});
  }

  render() {
    const {currentMode, notificationCount, isLast} = this.props;
    return (
      isLast ? (
        <NavbarLastItemStyled {...this.props} onClick={this.onClick}>
          {this.props.children}
        </NavbarLastItemStyled>
      ) :
        <NavbarItemStyled {...this.props} onClick={this.onClick}>
          {this.props.children}
          {notificationCount && <NavbarItemBadge currentMode={currentMode}>{notificationCount}</NavbarItemBadge>}
        </NavbarItemStyled>
    );
  }

}

NavbarItem.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  notificationCount: PropTypes.number
}
export default NavbarItem;
