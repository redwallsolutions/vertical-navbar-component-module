import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  NavbarContainer,
  VerticalNavbarStyled,
  NavBarHeaderItem,
  NavbarDivider,
  NavbarItemTextContainer,
  NavbarItemTitle,
  NavbarItemSubtitle,
  NavbarItemIconContainer
} from './Style';
import NavbarItem from './NavbarItem';
import NavbarToggler from './NavbarToggler';
import logoImg from './assets/img/redwall-logo.png';
import logoImgSmall from './assets/img/redwall-logo-small.png';

class VerticalNavbar extends Component {

  state = {
    activeItem: -1,
    isShown: true
  }

  toggleNavbar = () => {
    this.setState({
      isShown: !this.state.isShown
    });
  }

  onClickItem = (id) => {
    this.setState({
      activeItem: id
    });
  }

  buildNavbarHeaderItem = () => {
    const {headerItem} = this.props;
    const {logoImg, logoImgSmall} = headerItem;
    return (<React.Fragment>
      <NavBarHeaderItem {...this.state}>
        <img src={this.state.isShown
          ? logoImg
          : logoImgSmall} alt='Navbar Header Item' style={{
            height: '100%'
          }}/>
      </NavBarHeaderItem>
      <NavbarDivider/>
    </React.Fragment>);
  }

  buildNavbarItems = () => {
    const {items} = this.props;
    const {activeItem, ...rest} = this.state;
    return items.map((item, index) => (<NavbarItem {...rest} isActive={activeItem === index} key={index} id={index} onClick={this.onClickItem}>
      <NavbarItemIconContainer {...this.state}>
        {item.icon}
      </NavbarItemIconContainer>
      {
        this.state.isShown
          ? <NavbarItemTextContainer>
              <NavbarItemTitle title='Oi'>
                {item.title}
              </NavbarItemTitle>
              <NavbarItemSubtitle title={item.subTitle}>
                {item.subTitle}
              </NavbarItemSubtitle>
            </NavbarItemTextContainer>
          : ''
      }
    </NavbarItem>));
  }

  render() {
    return (<NavbarContainer>
      <VerticalNavbarStyled {...this.state}>
        {this.buildNavbarHeaderItem()}
        {this.buildNavbarItems()}
      </VerticalNavbarStyled>
      <NavbarToggler onClick={this.toggleNavbar} {...this.state}/>
    </NavbarContainer>);
  }

}

VerticalNavbar.propTypes = {
  isShown: PropTypes.bool,
  headerItem: PropTypes.shape({logoImg: PropTypes.string, logoImgSmall: PropTypes.string}),
  items: PropTypes.arrayOf(PropTypes.shape({icon: PropTypes.element, title: PropTypes.string, subTitle: PropTypes.string}))
}

VerticalNavbar.defaultProps = {
  isShown: true,
  headerItem: {
    logoImg,
    logoImgSmall
  }
}
export default VerticalNavbar;
