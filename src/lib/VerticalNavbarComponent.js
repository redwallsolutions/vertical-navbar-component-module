import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdPowerSettingsNew, MdLock, MdPerson } from 'react-icons/md';
import Avatar from 'react-avatar';
import Menu, {SubMenu, Item} from 'rc-menu';
import 'rc-menu/assets/index.css'
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
  NavbarHeaderItemSubtitle,
  CustomMenuStyles
} from './Style';
import NavbarItem from './NavbarItem';
import NavbarToggler from './NavbarToggler';
import logoImg from './assets/img/redwall-logo.png';
import logoImgSmall from './assets/img/redwall-logo-small.png';
import Tooltip from 'react-tooltip';

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
  isCurrentModePartiallyShown = () => {
    return this.state.currentMode === MODES.partiallyShown
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
    );
  }

  buildNavbarItems = () => {
    const { items } = this.props;
    const { activeItem, ...rest } = this.state;
    return items.map((item, index) => (
      <NavbarItem {...rest} isActive={activeItem === index} key={index} id={index} customOnClick={item.onClick} onClick={this.onClickItem} notificationCount={item.notificationCount} data-for={`id${index}`} data-tip={item.title}>
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
        {this.isCurrentModePartiallyShown() && <Tooltip id={`id${index}`} place='right' effect='solid' type='dark' delayShow={300}/>}
      </NavbarItem>
    ));
  }

  buildLastItem = (user) => {
    return (
      <NavbarItem isLast={true} onClick={()=>{}} currentMode={this.state.currentMode}>
        <CustomMenuStyles currentMode={this.state.currentMode}/>
        <Menu triggerSubMenuAction='click' openAnimation='zoom' className='vertical-navbar'>
          <SubMenu title={
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <NavbarItemIconContainer {...this.state}>
                <Avatar name={user.fullName} round={true} size='43px' src={user.profilePic} color='#E21306'/>
              </NavbarItemIconContainer>
              {
                this.isCurrentModeTotallyShown() ?
                  <NavbarItemTextContainer>
                    <NavbarItemTitle title={user.fullName}>
                      {user.fullName}
                    </NavbarItemTitle>
                    <NavbarItemSubtitle title={user.type}>
                      {user.type}
                    </NavbarItemSubtitle>
                  </NavbarItemTextContainer>
                : null
              }
            </div>
          } key="1" popupClassName='vertical-navbar'>
            <Item onClick={this.props.goToChangePass} key={2}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <MdLock/> <span style={{marginLeft: 10}}>Trocar senha</span>
              </div>
            </Item>
            <Item onClick={this.props.logout} key={3}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <MdPowerSettingsNew/> <span style={{marginLeft: 10}}>Sair</span>
              </div>
            </Item>
          </SubMenu>
        </Menu>
      </NavbarItem>
    )
  }

  render() {
    const {currentMode} = this.state
    const { user } = this.props
    return (
      <NavbarContainer className='vertical-navbar'>
        <VerticalNavbarStyled {...this.state}>
          {this.buildNavbarHeaderItem()}
          {this.buildNavbarItems()}
          {
            <div style={{height: 80}}></div>
          }
          {this.buildLastItem(user)}
        </VerticalNavbarStyled>
        <NavbarToggler onClick={this.sequentiallyToggle} onSwipeLeft={this.onSwipeLeft} onSwipeRight={this.onSwipeRight} currentMode={currentMode}/>
        <Content currentMode={currentMode}>
          {this.props.children}
        </Content>
      </NavbarContainer>
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
  },
  user: {
    fullName: 'Redwall Solutions',
    type: 'Administrador'
  },
  logout: () => {
    window.location.href='/login'
  }
}
export default VerticalNavbarComponent;
