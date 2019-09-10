import styled, { createGlobalStyle, css } from 'styled-components'
import Color from 'color'
import Theming from 'theming-component-module'
const theming = Theming.createThemeWithAppearance()

const defaultProps = {
	appearance: 'default',
	theme: {
		mode: 'light'
	}
}

const darkModeDefaults = css`
	background: linear-gradient(
		135deg,
		${props =>
			Color(theming(props).contrast(props))
				.lighten(0.5)
				.toString()},
		${props => theming(props).contrast}
	);
	color: ${props => theming(props).color};
`

const isItemActive = css`
	border-${props => (props.isSmall ? 'top' : 'right')}-color: ${props =>
	theming(props).color};
	background: ${props =>
		props.theme.mode === 'light'
			? Color(theming(props).contrast(props))
					.darken(0.02)
					.toString()
			: Color(theming(props).color(props))
					.darken(0.76)
					.toString()};
	transform: ${props => 'scale(1.08)'};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.03), 0 0 20px 0 rgba(0, 0, 0, 0.05);
`

const isSmall = css`
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	height: 80px;
	min-height: 80px;
	max-height: 80px;
`

const defaultSizes = css`
	width: 80px;
	max-width: 80px;
	min-width: 80px;
	height: 80px;
	max-height: 80px;
	min-height: 80px;
`

export const Reset = createGlobalStyle`
  .vertical-navbar-component-module, .vertical-navbar-component-module * {
    font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif !important;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: .3s;
  }

  .vertical-navbar-tooltip {
	  font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif !important;
	  font-size: 14px;
	  letter-spacing: 1px;
	  padding: 10px;
  }
`

export const VerticalNavbarContainer = styled.div`
	width: 100vw;
	max-width: 100vw;
	height: 100vh;
	max-height: 100vh;
	display: flex;
	position: relative;
`

export const VerticalNavbarScrollWrapper = styled.div`
  width: 100px;
  height: 100%;
  background: transparent;
  overflow: auto;
  overflow-${props => (props.isSmall ? 'y' : 'x')}: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
  }
  position: fixed; 
  z-index: 1;
  ${props => props.isSmall && isSmall}
  ${props =>
		props.isSmall &&
		'bottom:0; height: 100px; min-height: 100px; max-height: 100px; display: flex; align-items: flex-end;'}
  
`

export const VerticalNavbarStyled = styled.nav`
  width: 80px;
  height: ${props => (props.amountOfItems > 8 ? 'auto' : '100%')};
	box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1), 0 0 17px 0 rgba(0, 0, 0, 0.08),
		0 0 30px 0 rgba(0, 0, 0, 0.04);
  ${props => props.theme.mode === 'dark' && darkModeDefaults}
  background: ${props =>
		props.theme.mode === 'light'
			? 'white'
			: Color(theming(props).contrast(props))
					.lighten(0.8)
					.toString()};
  ${props => props.isSmall && isSmall}
  ${props =>
		props.isSmall &&
		'display: flex; width: auto; min-width: auto; max-width: max-content;'}

`

export const VerticalNavbarHeaderStyled = styled.header`
	${defaultSizes}
	height: 120px;
	max-height: 120px;
	min-height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 70%;
	}
`

export const ContentContainer = styled.div`
  z-index: 0;
  width: 100%;
  height: calc(100% - ${props => (props.isSmall ? '80px' : '0px')});
  position: absolute;
	background: linear-gradient(135deg, #f7f7f7, #eaeaea);
  ${props => props.theme.mode === 'dark' && darkModeDefaults}
  padding-left: ${props => (!props.isSmall ? '98px' : '0px')}
  overflow: auto;
  overflow-x: hidden;
`

export const VerticalNavbarItemStyled = styled.div`
  ${defaultSizes}
  ${props =>
		props.isSmall &&
		(props.amountOfItems > 3
			? 'width: 25vw; max-width: 25vw; min-width: 25vw;'
			: `width: ${100 / props.amountOfItems}vw;max-width: ${100 /
					props.amountOfItems}vw;min-width: ${100 / props.amountOfItems}vw;`)}	
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
		p {
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 80%;
			white-space: nowrap;
			font-size: 11px;
		}
	color: ${props => theming(props).color};
	border-${props => (props.isSmall ? 'top' : 'right')}: 2px solid transparent;
	cursor: pointer;
	${props => props.isActive && isItemActive}
	&:hover {
		${isItemActive}
	}
	&:active {
		transform: scale(1.06);
	}
`

Reset.defaultProps = VerticalNavbarContainer.defaultProps = VerticalNavbarStyled.defaultProps = ContentContainer.defaultProps = VerticalNavbarItemStyled.defaultProps = VerticalNavbarHeaderStyled.defaultProps = defaultProps
