import styled, {createGlobalStyle} from 'styled-components';
import Raleway from './assets/fonts/Raleway-Light.ttf';

const navbarOpenedWidthMedium = '20vw';
const navbarOpenedWidthSmall = '80vw';
const navbarClosedWidthMedim = '75px';
const navbarItemTextColorActive = 'rgba(193, 7, 18, 0.86)';

export const GlobalStyle = createGlobalStyle `
  body {
    padding:0;
    margin:0;
    background-color: rgba(33, 29, 29, 0.06);
  }
`

export const DefaultFont = createGlobalStyle `
  @font-face {
    font-family: Raleway;
    src: url(${Raleway}) format("TrueType");
    font-style: light;
    font-weight: 200;
    font-display: fallback;
  }
`

export const VerticalNavbarStyled = styled.div `
  box-shadow: 8px 0 30px -4px rgba(0,0,0,0.1);
  background-color: #fff;
  height: 100vh;
  transition: width 0.4s cubic-bezier(.86,.47,0,1), min-width 0.4s cubic-bezier(.86,.47,0,1);
  width: ${props => props.isShown
  ? navbarOpenedWidthMedium
  : navbarClosedWidthMedim};
  min-width: ${props => props.isShown
    ? navbarOpenedWidthMedium
    : navbarClosedWidthMedim};
  overflow: hidden;
  @media (max-width: 500px) {
    width: ${props => props.isShown
      ? navbarOpenedWidthSmall
      : '0px'};
    min-width: ${props => props.isShown
        ? navbarOpenedWidthSmall
        : '0px'};
  }
`

export const NavbarContainer = styled.div `
  padding: 0px;
  margin: 0px;
  display: flex;
`

export const NavbarTogglerStyled = styled.div `
  width: 60px;
  height: 60px;
  min-width: 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color: white;
  box-shadow: 0 10px 25px -2px rgba(0,0,0,0.1);
  transform-origin: left center;
  transition: transform .3s, box-shadow .3s;
  .top {
    transform: ${props => props.isShown
  ? 'translateX(5.5px) rotate(45deg)'
  : 'rotate(0)'};
    width: 50%;
    margin: ${props => props.isShown && '1.6px'};
  }
  .middle {
    opacity: ${props => props.isShown
    ? 0
    : 1}
  }
  .bottom {
    transform: ${props => props.isShown
      ? 'translateX(5.5px) rotate(-45deg)'
      : 'rotate(0)'};
    width: 50%;
    margin: ${props => props.isShown && '1.6px'};
  }

  &:hover{
    box-shadow: -5px 5px 25px -2px rgba(0,0,0,0.1);
    transform: perspective(20em) ${props => props.isShown
        ? 'rotateY(-25deg)'
        : 'rotateY(18deg)'};
  }
`

export const HumbBar = styled.div `
  width: 63%;
  height: 5px;
  margin: 4px 0;
  background-color: rgba(84, 84, 84, 0.77);
  transition: transform 0.2s;
  transform-origin: left center;
`

export const NavbarItemStyled = styled.div `
  display: flex;
  align-items: center;
  justify-content: ${props => props.isShown
  ? 'flex-start'
  : 'center'};
  padding: 0.3em 0;
  max-height: 50px;
  height: 50px;
  transition: background-color 0.3s;
  :hover {
    background-color: rgba(0,0,0,0.03);
  }
  cursor: pointer;
  color: ${props => props.isActive
    ? navbarItemTextColorActive
    : ''}
`

export const NavbarItemIconContainer = styled.div `
  width: ${props => props.isShown
  ? '30%'
  : ''};
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
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
  font-size: 1.3em;
  font-family: Raleway;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
`
export const NavbarItemSubtitle = styled.h3 `
  font-size: .8em;
  padding:0;
  margin:0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Raleway;
`

export const NavBarHeaderItem = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em 0;
  width: ${props => props.isShown
  ? '100%'
  : '75px'};
  max-height: 50px;
  height: 50px;
  transition: background-color 0.3s;
  :hover {
    background-color: rgba(0,0,0,0.03);
  }
  cursor: pointer;
`

export const NavbarDivider = styled.hr `
padding: 0;
margin: 0;
height: 20px;
border: 0;
box-shadow: 0 10px 20px -10px rgba(0,0,0,0.1) inset;
`

export const Content = styled.div `
  padding: 10px;
  padding-top: 20px;
  overflow-y: scroll;
  max-height: calc(100vh - 30px);
`
