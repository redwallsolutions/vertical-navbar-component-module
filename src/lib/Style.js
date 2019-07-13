import styled, {createGlobalStyle, css} from 'styled-components';
import { MODES } from './VerticalNavbarComponent';
import Color from 'color';
import Theming from 'theming-component-module';

const theming = Theming.createThemeWithAppearance();

const defaultProps = {
  appearance: 'primary',
  theme: {
    mode: 'light'
  }
}

export const DefaultFont = createGlobalStyle `
  .vertical-navbar * {
    font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif !important;
    box-sizing: border-box;
  }
`

export const CustomMenuStyles = createGlobalStyle`
  .vertical-navbar .rc-menu-root {
    padding: 0 !important;
    margin: 0 !important;
    cursor: pointer !important;
    box-shadow: none !important;
    border: none !important;
    background: none !important;
  }

  .vertical-navbar .rc-menu-item-active, .rc-menu-submenu-active > .rc-menu-submenu-title {
    background: none !important;
  }

  .vertical-navbar .rc-menu-item-active {
    background: ${props => theming(props).color} !important;
    color: ${props => theming(props).contrast} !important;
  }

  .vertical-navbar .rc-menu-submenu-selected {
    background: none !important;
  }

  .vertical-navbar .rc-menu-submenu-title {
    background: none;
    padding: 0 !important;
    margin: 0 !important;
    transition: background-color .3s;
    border-radius: 0 !important;
    color: ${props => Color(theming(props).color(props)).grayscale().lighten(0.3).string()}
  }

  .vertical-navbar .rc-menu-sub {
    margin-left: ${props => props.currentMode === MODES.partiallyShown ? '16px' : '60px'} !important;
    transform-origin: left bottom !important;
    width: 100% !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1)!important;
    background: ${props => Color(theming(props).contrast(props)).lighten(0.3).string()} !important;
    color: ${props => theming(props).color} !important;
  }

  .vertical-navbar .rc-menu-submenu-arrow::before {
    content: "" !important;
  }

  .vertical-navbar li.rc-menu-item {
   font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif;
   cursor: pointer !important;
   width: auto !important;
   transition: background-color .3s;
   border: none !important;
   padding: 8px !important;
   text-align: center;
   border-radius: 0 !important;
  }
  .vertical-navbar li.rc-menu-item-selected {
    background: ${props => Color(theming(props).color(props)).fade(.9).string()}
  }
`

CustomMenuStyles.defaultProps = defaultProps


const applyToNavbarWhenTottalyShown = css`
  min-width: 25vw;
  @media (max-width: 768px){
    min-width: 40vw;
  }
  @media (max-width: 714px) {
    min-width: 85vw;
  }
`
const applyToNavbarWhenPartiallyShown = css `
  min-width: 80px;
`

const applyToLastItemWhenTotallyShwon = css`
  max-width: 25vw;
  @media (max-width: 768px){
    max-width: 40vw;
  }
  @media (max-width: 714px) {
    max-width: 85vw;
  }
`

const applyToLastItemWhenPartiallyShown = css`
  max-width: 80px;
`

const VerticalNavbarStyled = styled.div`
  position: relative;
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.1), 0 0 20px 0 rgba(0,0,0,.06);
  background: ${props => props.theme.mode === 'light' ? 'white' : theming(props).contrast};
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
  }
  min-width: 0;
  width: 0;
  transition: min-width .4s cubic-bezier(.86,.47,0,1);
  ${props => props.currentMode === MODES.totallyShown && applyToNavbarWhenTottalyShown}
  ${props => props.currentMode === MODES.partiallyShown && applyToNavbarWhenPartiallyShown}
  z-index: 1;
`

VerticalNavbarStyled.defaultProps = defaultProps

export {VerticalNavbarStyled};

const NavbarContainer = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
`

NavbarContainer.defaultProps = defaultProps

export {NavbarContainer}

const NavbarTogglerStyled = styled.div`
  width: 2px;
  height: inherit;
  background-color: ${props => theming(props).color};
  opacity: ${props => props.currentMode === MODES.hidden ? .3 : 0};
  margin-left: 3px;
  transition: opacity .3s .8s ease-out;
`

NavbarTogglerStyled.defaultProps = defaultProps;

export {NavbarTogglerStyled}

const NavbarTogglerContainer = styled.div`
  position: relative;
  width: 16px;
  height: 100%;
  cursor: pointer;
  background-color: ${props => props.theme.mode === 'light' ? '#F7F8FC' : Color(theming(props).contrast(props)).darken(.3).string()};
  &:hover span, &:hover div {
    transition: all .3s ease-out;
    opacity: .7;
  }
`

NavbarTogglerContainer.defaultProps = defaultProps;

export {NavbarTogglerContainer}

const NavbarTogglerIndicator = styled.span`
  position: absolute;
  top: 50%;
  color: ${props => theming(props).color};
  opacity: ${props => props.currentMode === MODES.hidden ? .3 : 0};
  transform: ${props => props.currentMode === MODES.totallyShown ? 'rotate(180deg)': 'rotate(0deg)'};
  transition: all .3s .8s ease-out;
  left: 5px;
`

NavbarTogglerIndicator.defaultProps = defaultProps

export {NavbarTogglerIndicator}

const NavbarItemStyled = styled.div `
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  max-height: 80px;
  width: 100%;
  color: ${
    props =>
      props.isActive ?
        theming(props).color :
        props.theme.mode === 'light' ?
          Color(theming(props).color(props)).darken(.7).string() :
          Color(theming(props).color(props)).darken(.3).string()
  };
  background: ${props => props.isActive ? props.theme.mode === 'light' ? '#F7F8FC' : Color(theming(props).contrast(props)).darken(.3).string() : 'none'};
  cursor: pointer;
  border-left-style: solid;
  border-left-width: 4px;
  border-left-color: ${props => props.isActive ? theming(props).color : 'transparent'};
  transition: all .2s ease-in-out;
  &:hover {
    border-left-color: ${props => theming(props).color};
  }
  &:focus {
    border-left-color: ${props => theming(props).color};
  }
  &:active {
    color: ${props => Color(theming(props).color(props)).lighten(.6).string()};
  }
`

const NavbarLastItemStyled = styled(NavbarItemStyled)`
  position: fixed;
  z-index: 3;
  left: 0;
  bottom: 0;
  max-width: 0;
  border-left-width: 0;
  overflow: hidden;
  transition: max-width .4s cubic-bezier(.86,.47,0,1);
  ${props => props.currentMode === MODES.totallyShown && applyToLastItemWhenTotallyShwon}
  ${props => props.currentMode === MODES.partiallyShown && applyToLastItemWhenPartiallyShown}
  box-shadow: 0 -5px 15px 0 rgba(0,0,0,0.2);
  background: ${props => props.theme.mode === 'light' ? '#F7F8FC' : Color(theming(props).contrast(props)).darken(.3).string()};
`

NavbarItemStyled.defaultProps = NavbarLastItemStyled.defaultProps = defaultProps

export {NavbarItemStyled, NavbarLastItemStyled}

export const NavbarItemIconContainer = styled.div `
  width: ${props => props.currentMode === MODES.totallyShown
  ? '30%'
  : '100%'};
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: ${props => props.currentMode === MODES.totallyShown ? 'flex-end' : 'center'};
`

export const NavbarItemTextContainer = styled.div `
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  padding: 1em;
`

export const NavbarItemTitle = styled.h1 `
  padding:0;
  margin:0 0 5px 0;
  font-size: 17px;
  font-weight: bolder;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
`
export const NavbarItemSubtitle = styled.h3 `
  font-size: .8em;
  padding:0;
  margin: 5px 0 0 0;
  font-weight: 300;
  letter-spacing: 1px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const NavbarItemBadge = styled.span`
  display: inline-block;
  position: absolute;
  padding: 2px 7px;
  margin-right: 10%;
  border-radius: 50px;
  font-size: 12px;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.2);
  background-color: ${props => theming(props).color};
  color: ${props => theming(props).contrast};
  right: 0;
`

NavbarItemBadge.defaultProps = defaultProps

export {NavbarItemBadge};
export const NavbarHeaderItem = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${props => props.currentMode === MODES.totallyShown ? '30vh': '20vh'};
  max-height: 30vh;
  transition: height .2s ease-in-out .3s;
  min-height: 75px;
  cursor: pointer;
`

const NavbarHeaderItemImage = styled.img `
  width: 70%;
`

NavbarHeaderItemImage.defaultProps = defaultProps

export {NavbarHeaderItemImage}

const NavbarHeaderItemSubtitle = styled.h4`
  color: ${props => Color(theming(props).color(props)).fade(.7).string()};
  width: $70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  text-align: center;
  margin:15px 0 0 0;
`

NavbarHeaderItemSubtitle.defaultProps = defaultProps

export {NavbarHeaderItemSubtitle}

const Content = styled.div `
  overflow-y: auto;
  max-height: 100vh;
  width: 99%;
  padding: 10px;
  padding-left: 0;
  background-color: ${props => props.theme.mode === 'light' ? '#F7F8FC' : Color(theming(props).contrast(props)).darken(.3).string()};
`
Content.defaultProps = defaultProps

export {Content};
