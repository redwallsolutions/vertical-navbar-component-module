import styled, {createGlobalStyle, css} from 'styled-components';
import { MODES } from './VerticalNavbarComponent';

const redwallColor = "#E20613";

const defaultTheme = {
  primary: redwallColor,
  navbar: {
    defaultColor: "rgb(145, 145, 145)",
    bg: "#fff",
    header: {
      imgSize: "md",
      subtitleColor: undefined
    },
    item: {
      bg: "transparent",
      bgHover: "linear-gradient(45deg, rgba(147, 147, 147, 0.12), rgb(255, 233, 233))",
      markerColor: redwallColor,
      titleColor: "rgb(66, 66, 66)",
      activeTitleColor: redwallColor
    },
    notification: {
      bgColor: redwallColor
    }
  }
}

export const GlobalStyle = createGlobalStyle `
  body {
    padding:0;
    margin:0;
    background-color: #F7F8FC;
  }
`

export const DefaultFont = createGlobalStyle `
  @import url("https://fonts.googleapis.com/css?family=Quicksand");
  .vertical-navbar {
    font-family: 'Quicksand', cursive;
  }
  .vertical-navbar {
    background: #F7F8FC;
  }
  .vertical-navbar * {
    padding: 0;
    margin: 0;
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
  background: ${props => props.theme.navbar.bg};
  overflow: hidden;
  min-width: 0;
  width: 0;
  transition: min-width .4s cubic-bezier(.86,.47,0,1);
  ${props => props.currentMode === MODES.totallyShown && applyToNavbarWhenTottalyShown}
  ${props => props.currentMode === MODES.partiallyShown && applyToNavbarWhenPartiallyShown}
`

VerticalNavbarStyled.defaultProps = {
  theme: {
    navbar: {
      bg: '#fff'
    }
  }
}

export {VerticalNavbarStyled};

export const NavbarContainer = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const NavbarTogglerStyled = styled.div`
  width: 2px;
  height: inherit;
  background-color: ${redwallColor};
  opacity: ${props => props.currentMode === MODES.hidden ? .9 : 0};
  margin-left: 3px;
  transition: opacity .3s .8s ease-out;
`

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
  color: ${props => props.theme.primary};
  opacity: ${props => props.currentMode === MODES.hidden ? .9 : 0};
  transform: ${props => props.currentMode === MODES.totallyShown ? 'rotate(180deg)': 'rotate(0deg)'};
  transition: all .3s .8s ease-out;
  left: 5px;
`

NavbarTogglerIndicator.defaultProps = {
  theme: {
    primary: redwallColor
  }
}

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
      (props.isActive && (props.theme.navbar.item.activeTitleColor || props.theme.navbar.item.defaultColor)) ||
      props.theme.navbar.item.titleColor
  };
  background: ${props=>props.theme.navbar.item.bg}
  cursor: pointer;
  border-left: ${props=>props.isActive ? '4px' : 0} solid ${props=> props.isActive ? props.theme.navbar.item.markerColor : "transparent"}
  transition: border-left .2s ease-out, color .2s;
  &:hover {
    border-left: 4px solid ${props=>props.theme.navbar.item.markerColor}
  }
  &:focus {
    border-left: 4px solid ${props=>props.theme.navbar.item.markerColor}
  }
  &:active {
    border-left: 8px solid ${props=>props.theme.navbar.item.markerColor}
    color: rgb(47, 47, 47);
  }
`

NavbarItemStyled.defaultProps = {
  theme: defaultTheme
}

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
  background-color: ${
    props =>
      props.theme.navbar.notification.bgColor
  };
  color: white;
  right: 0;
`

NavbarItemBadge.defaultProps = {
  theme: defaultTheme
}

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
  width: ${
    props =>
    (props.theme.navbar.header.imgSize === 'md'&& '70%') ||
    (props.theme.navbar.header.imgSize === 'sm' && '50%') ||
    (props.theme.navbar.header.imgSize === 'lg' && '90%')
    }
`

NavbarHeaderItemImage.defaultProps = {
  theme: defaultTheme
}

export {NavbarHeaderItemImage}

const NavbarHeaderItemSubtitle = styled.h4`
  color: ${
    props =>
      props.theme.navbar.header.subtitleColor ||
      props.theme.navbar.defaultColor
  };
  width: ${
    props =>
      (props.theme.navbar.header.imgSize === 'md' && '70%') ||
      (props.theme.navbar.header.imgSize === 'sm' && '50%') ||
      (props.theme.navbar.header.imgSize === 'lg' && '90%')
    }
  }
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  text-align: center;
  margin:15px 0 0 0;
`

NavbarHeaderItemSubtitle.defaultProps = {
  theme: defaultTheme
}

export {NavbarHeaderItemSubtitle}

export const Content = styled.div `
  overflow-y: auto;
  max-height: 100vh;
  width: 99%;
  padding: 5px 8px 0px 0px;
`
