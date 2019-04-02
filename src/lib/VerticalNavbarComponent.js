import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  NavbarContainer,
  VerticalNavbarStyled,
  NavBarHeaderItem,
  NavbarItemTextContainer,
  NavbarItemTitle,
  NavbarItemSubtitle,
  NavbarItemIconContainer,
  Content,
  NavbarHeaderItemImage,
  NavbarHeaderItemSubtitle
} from './Style';
import NavbarItem from './NavbarItem';
import NavbarToggler from './NavbarToggler';
import logoImg from './assets/img/redwall-logo.png';
import logoImgSmall from './assets/img/redwall-logo-small.png';

class VerticalNavbarComponent extends Component {

  componentDidMount() {
    this.props.getVerticalNavbarController(this.exposeVerticalNavbarController());
  }

  state = {
    activeItem: -1,
    isShown: true
  }

  toggleNavbar = () => {
    this.setState({
      isShown: !this.state.isShown
    });
  }

  onClickItem = (item) => {
    this.setState({
      activeItem: item.id
    });

    if (item.onClick) {
      const { onClick, ...rest } = item;
      onClick(rest);
    }
  }

  setItem = (itemIndex) => {
    this.setState({
      activeItem: itemIndex
    })
  }

  exposeVerticalNavbarController = () => ({
    setItem: this.setItem
  })



  buildNavbarHeaderItem = () => {
    const { headerItem } = this.props;
    const { logoImg, logoImgSmall, subtitle } = headerItem;
    const { isShown } = this.state
    return (
      <React.Fragment>
        <NavBarHeaderItem isShown={isShown}>
          <NavbarHeaderItemImage src={
            isShown ? logoImg : logoImgSmall} alt={subtitle}/>
          {isShown && <NavbarHeaderItemSubtitle title={subtitle}>
            {subtitle}
          </NavbarHeaderItemSubtitle>}
        </NavBarHeaderItem>
      </React.Fragment>
    );
  }

  buildNavbarItems = () => {
    const { items } = this.props;
    const { activeItem, ...rest } = this.state;
    return items.map((item, index) => (
      <NavbarItem {...rest} isActive={activeItem === index} key={index} id={index} customOnClick={item.onClick} onClick={this.onClickItem} notificationCount={item.notificationCount}>
        <NavbarItemIconContainer {...this.state}>
          {item.icon}
        </NavbarItemIconContainer>
        {
          this.state.isShown
            ? <NavbarItemTextContainer>
              <NavbarItemTitle title={item.title}>
                {item.title}
              </NavbarItemTitle>
              <NavbarItemSubtitle title={item.subTitle}>
                {item.subTitle}
              </NavbarItemSubtitle>
            </NavbarItemTextContainer>
            : ''
        }
      </NavbarItem>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <NavbarContainer className='vertical-navbar'>
          <VerticalNavbarStyled {...this.state}>
            {this.buildNavbarHeaderItem()}
            {this.buildNavbarItems()}
          </VerticalNavbarStyled>
          <NavbarToggler onClick={this.toggleNavbar} {...this.state}/>
          <Content>
            <div style={{padding: '10px', paddingTop: '20px'}}>
              {this.props.children}
            </div>
          </Content>
        </NavbarContainer>
      </React.Fragment>
    );
  }

}

VerticalNavbarComponent.propTypes = {
  isShown: PropTypes.bool,
  headerItem: PropTypes.shape({ logoImg: PropTypes.string, logoImgSmall: PropTypes.string }),
  items: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.element, title: PropTypes.string, subTitle: PropTypes.string }))
}

VerticalNavbarComponent.defaultProps = {
  isShown: true,
  headerItem: {
    logoImg,
    logoImgSmall,
    subtitle: 'The vertical navbar.'
  }
}
export default VerticalNavbarComponent;
