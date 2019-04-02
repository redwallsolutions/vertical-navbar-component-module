import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  NavbarContainer,
  VerticalNavbarStyled,
  NavbarHeaderItem,
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

export const MODES = {
  hidden: 1,
  partiallyShown: 2,
  totallyShown: 3
}

class VerticalNavbarComponent extends Component {

  constructor(props) {
    super(props);
    this.previousMode = MODES.hidden
  }
  componentDidMount() {
    this.props.getVerticalNavbarController(this.exposeVerticalNavbarController());
  }

  state = {
    activeItem: -1,
    currentMode: MODES.partiallyShown
  }

  isCurrentModeTotallyShown = () => {
    return this.state.currentMode === MODES.totallyShown
  }

  toggleNavbar = () => {
    let newMode = undefined;
    if(this.state.currentMode !== MODES.hidden){
      newMode = MODES.hidden
      this.previousMode = this.state.currentMode
    } else {
      newMode = this.previousMode
    }
    this.setState({
      currentMode: newMode
    })
  }

  sequentiallyToggle = () => {
    const {currentMode} = this.state
    let newMode = currentMode
    if(currentMode === MODES.hidden) newMode = MODES.partiallyShown
    else if(currentMode === MODES.partiallyShown) newMode = MODES.totallyShown
    else if(currentMode === MODES.totallyShown) newMode = MODES.hidden

    this.setState({
      currentMode: newMode
    });
  }

  changeMode = (newMode) => {
    this.setState({
      currentMode:newMode
    });
  }

  hide = () => {
    this.changeMode(MODES.hidden)
  }

  showPartially = () => {
    this.changeMode(MODES.partiallyShown)
  }

  showTotally = () => {
    this.changeMode(MODES.totallyShown)
  }

  onSwipeLeft = () => {
    this.changeMode(MODES.hidden)
  }

  onSwipeRight = () => {
    this.changeMode(MODES.totallyShown)
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
    const {currentMode} = this.state
    const isTotallyShown =  currentMode === MODES.totallyShown
    return (
      <React.Fragment>
        <NavbarHeaderItem currentMode={currentMode}>
          <NavbarHeaderItemImage src={
            isTotallyShown ?
            logoImg :
            logoImgSmall
          } alt={subtitle} currentMode={currentMode}/>
          {isTotallyShown && <NavbarHeaderItemSubtitle title={subtitle}>
            {subtitle}
          </NavbarHeaderItemSubtitle>}
        </NavbarHeaderItem>
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
          this.isCurrentModeTotallyShown() ?
            <NavbarItemTextContainer>
              <NavbarItemTitle title={item.title}>
                {item.title}
              </NavbarItemTitle>
              <NavbarItemSubtitle title={item.subTitle}>
                {item.subTitle}
              </NavbarItemSubtitle>
            </NavbarItemTextContainer>
            : null
        }
      </NavbarItem>
    ));
  }

  render() {
    const {currentMode} = this.state
    return (
      <React.Fragment>
        <NavbarContainer className='vertical-navbar'>
          <VerticalNavbarStyled {...this.state}>
            {this.buildNavbarHeaderItem()}
            {this.buildNavbarItems()}
          </VerticalNavbarStyled>
          <NavbarToggler onClick={this.sequentiallyToggle} onSwipeLeft={this.onSwipeLeft} onSwipeRight={this.onSwipeRight} currentMode={currentMode}/>
          <Content currentMode={currentMode}>
            {this.props.children}
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
