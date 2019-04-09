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
  @import url("https://fonts.googleapis.com/css?family=Quicksand");
  .vertical-navbar {
    font-family: 'Quicksand', cursive;
  }
  .vertical-navbar {
    background: #F7F8FC;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const applyToNavbarWhenTottalyShown = css`
  min-width: 25vw;
  @media (max-width: 768px){
    min-width: 40vw;
  }
  @media (max-width: 414px){
    min-width: 85vw;
  }
`
const applyToNavbarWhenPartiallyShown = css `
  min-width: 80px;
`

const VerticalNavbarStyled = styled.div`
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.1), 0 0 20px 0 rgba(0,0,0,.08);
  background: white;
  overflow: hidden;
  min-width: 0;
  width: 0;
  transition: min-width .4s cubic-bezier(.86,.47,0,1);
  ${props => props.currentMode === MODES.totallyShown && applyToNavbarWhenTottalyShown}
  ${props => props.currentMode === MODES.partiallyShown && applyToNavbarWhenPartiallyShown}
`

VerticalNavbarStyled.defaultProps = defaultProps

export {VerticalNavbarStyled};

export const NavbarContainer = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
`

const NavbarTogglerStyled = styled.div`
  width: 2px;
  height: inherit;
  background-color: ${props => theming(props).color};
  opacity: ${props => props.currentMode === MODES.hidden ? .7 : 0};
  margin-left: 3px;
  transition: opacity .3s .8s ease-out;
`

NavbarTogglerStyled.defaultProps = defaultProps;

export {NavbarTogglerStyled}

export const NavbarTogglerContainer = styled.div`
  position: relative;
  width: 30px;
  height: 100%;
  cursor: pointer;
  background-color: transparent;
  &:hover span, &:hover div {
    transition: all .3s ease-out;
    opacity: .9;
  }
`

const NavbarTogglerIndicator = styled.span`
  position: absolute;
  top: 50%;
  color: ${props => theming(props).color};
  opacity: ${props => props.currentMode === MODES.hidden ? .7 : 0};
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
        Color(theming(props).contrast(props)).darken(.7).string()
  };
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

NavbarItemStyled.defaultProps = defaultProps

export {NavbarItemStyled}

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
  overflow: hidden;
  padding: 1em;
  width: 100%;
`

export const NavbarItemTitle = styled.h1 `
  padding:0;
  margin:0;
  font-size: 17px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
`
export const NavbarItemSubtitle = styled.h3 `
  font-size: .7em;
  padding:0;
  margin:0;
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

export const Content = styled.div `
  overflow-y: auto;
  max-height: 100vh;
  width: 99%;
  padding: 10px;
`
