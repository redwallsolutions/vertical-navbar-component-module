import styled, {createGlobalStyle} from 'styled-components';

const navbarOpenedWidthLarge = '25vw';
const navbarClosedWidthLarge = '90px';
const navbarOpenedWidthMedium = '33vw';
const navbarClosedWidthMedium = '80px';
const navbarOpenedWidthSmall = '75vw';
const navbarClosedWidthSmall = '80px';
const navbarItemTextColorActive = 'rgba(193, 7, 18, 0.86)';
const redwallColor = "#E20613";

const defaultTheme = {
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
  .vertical-navbar * {
    font-family: 'Quicksand', cursive;
  }
`

const VerticalNavbarStyled = styled.div `
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.1), 0 0 43px 0 rgba(0,0,0,.02);
  background: ${props => props.theme.navbar.bg};
  height: 100vh;
  transition: width 0.4s cubic-bezier(.86,.47,0,1), min-width 0.4s cubic-bezier(.86,.47,0,1);
  width: ${props => props.isShown
  ? navbarOpenedWidthLarge
  : navbarClosedWidthLarge}
  min-width: ${props => props.isShown
  ? navbarOpenedWidthLarge
  : navbarClosedWidthLarge}
  overflow: hidden;
  @media (max-width: 768px) {
    width: ${props => props.isShown
      ? navbarOpenedWidthMedium
      : navbarClosedWidthMedium}
    min-width: ${props => props.isShown
      ? navbarOpenedWidthMedium
      : navbarClosedWidthMedium}
  }
  @media (max-width: 414px) {
    width: ${props => props.isShown
      ? navbarOpenedWidthSmall
      : navbarClosedWidthSmall}
    min-width: ${props => props.isShown
      ? navbarOpenedWidthSmall
      : navbarClosedWidthSmall}
  }
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

const NavbarItemStyled = styled.div `
  display: flex;
  align-items: center;
  justify-content: ${props => props.isShown
  ? 'flex-start'
  : 'center'};
  padding: 0.3em 0;
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

export {NavbarItemStyled};
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
  ${
    props=>
      !props.isShown && 'position: relative; left: -15%; top: -8px;'
    }
`

NavbarItemBadge.defaultProps = {
  theme: defaultTheme
}

export {NavbarItemBadge};
export const NavBarHeaderItem = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: '100%';
  height: ${props => props.isShown ? '30vh': '20vh'}
  max-height: '30vh';
  transition height .2s ease-in-out .3s;
  min-height: '75px';
  cursor: pointer;
`

const NavbarHeaderItemImage = styled.img `
  width: ${
    props =>
    (props.theme.navbar.header.imgSize === 'md' && props.isShown && '70%') ||
    (props.theme.navbar.header.imgSize === 'md' && !props.isShown && '55%') ||
    (props.theme.navbar.header.imgSize === 'sm' && props.isShown && '50%') ||
    (props.theme.navbar.header.imgSize === 'sm' && !props.isShown && '35%') ||
    (props.theme.navbar.header.imgSize === 'lg' && props.isShown && '90%') ||
    (props.theme.navbar.header.imgSize === 'lg' && props.isShown && '75%')
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
  overflow-y: auto;
  max-height: calc(100vh - 30px);
  width: 100%;
`
