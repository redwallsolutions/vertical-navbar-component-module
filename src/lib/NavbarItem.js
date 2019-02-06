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
    const {isShown} = this.props;
    return (<NavbarItemStyled {...this.props} onClick={this.onClick}>
      {this.props.children}
      <NavbarItemBadge isShown={isShown}>99+</NavbarItemBadge>
    </NavbarItemStyled>);
  }

}

NavbarItem.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool
}
export default NavbarItem;
