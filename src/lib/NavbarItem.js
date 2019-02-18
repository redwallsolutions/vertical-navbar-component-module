import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {NavbarItemStyled, NavbarItemBadge} from './Style';
class NavbarItem extends PureComponent {

  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    this.props.onClick({id: this.props.id, onClick: this.props.customOnClick, ...e});
  }

  render() {
    const {isShown, notificationCount} = this.props;
    return (<NavbarItemStyled {...this.props} onClick={this.onClick}>
      {this.props.children}
      {this.props.notificationCount && <NavbarItemBadge isShown={isShown}>{this.props.notificationCount}</NavbarItemBadge>}
    </NavbarItemStyled>);
  }

}

NavbarItem.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  notificationCount: PropTypes.string
}
export default NavbarItem;
