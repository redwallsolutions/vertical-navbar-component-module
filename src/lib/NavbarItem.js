import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {NavbarItemStyled} from './Style';
class NavbarItem extends PureComponent {

  onClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (<NavbarItemStyled {...this.props} onClick={this.onClick}>
      {this.props.children}
    </NavbarItemStyled>);
  }

}

NavbarItem.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool
}
export default NavbarItem;
