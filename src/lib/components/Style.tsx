import styled, { createGlobalStyle, css } from "styled-components";
import Color from "color";
import { createThemeWithAppearance } from "@redwallsolutions/theming-component-module";
import { ICommonProps } from "@redwallsolutions/common-interfaces-ts";
import {
  IVerticalNavbarStyledProps,
  IItemsStyledProps,
  IResponsive,
} from "./interfaces";

const theming = createThemeWithAppearance();

const isLight = (mode: String) => mode === "light";

export const VerticalNavbarContainer = styled.div<IVerticalNavbarStyledProps>`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  flex-direction: ${({ isTabletOrMobile }) =>
    isTabletOrMobile ? "column-reverse" : "row"};
`;

export const Navbar = styled.nav<IVerticalNavbarStyledProps & ICommonProps>`
  display: flex;
  flex-direction: ${({ isTabletOrMobile }) =>
    isTabletOrMobile ? "row" : "column"};
  width: ${({ isTabletOrMobile }) => (isTabletOrMobile ? "100%" : "60px")};
  height: ${({ isTabletOrMobile }) => (isTabletOrMobile ? "60px" : "100%")};
  ${({ visible, isTabletOrMobile }) =>
    !visible && (isTabletOrMobile ? "height:0" : "width:0")};
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
  }
  overflow-x: ${({ isTabletOrMobile }) =>
    isTabletOrMobile ? "auto" : "hidden"};
  overflow-y: ${({ isTabletOrMobile }) =>
    isTabletOrMobile ? "hidden" : "auto"};
  flex-shrink: 0;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: background-color 0.5s,
    height 0.6s cubic-bezier(0.24, 1.11, 0.3, 1.14),
    width 0.6s cubic-bezier(0.24, 1.11, 0.3, 1.14);
  background-color: ${(props) =>
    isLight(props.theme.mode)
      ? "white"
      : Color(theming(props).contrast(props))
          .lighten(0.2)
          .toString()};
`;

export const Content = styled.main<ICommonProps>`
  display: block;
  position: relative;
  height: 100%;
  flex-grow: 1;
  overflow: auto;
  background: ${(props) =>
    isLight(props.theme.mode)
      ? "linear-gradient(135deg, #f4f4f4, #eaeaea)"
      : theming(props).contrast};
`;

const desktopHovers = css`
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  &:hover {
    border-right: 3px solid
      ${(props) =>
        isLight(props.theme.mode)
          ? theming(props).color
          : theming(props).contrast};
  }
`;

export const Item = styled.div<IItemsStyledProps & IResponsive & ICommonProps>`
  /* &:active div {
    transform: scale(0.97);
  } */
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  display: ${({ isTabletOrMobile }) =>
    isTabletOrMobile ? "inline-block" : "block"};
  color: ${(props) => theming(props).color};
  width: ${({ isTabletOrMobile, itemsLength = 1 }) =>
    isTabletOrMobile
      ? itemsLength > 3
        ? "25%"
        : `${100 / itemsLength}%`
      : "60px"};
  height: 60px;
  box-sizing: border-box;
  background: ${({ active, ...rest }) =>
    active
      ? isLight(rest.theme.mode)
        ? Color(theming(rest).color(rest))
            .fade(0.9)
            .toString()
        : Color(theming(rest).contrast(rest))
            .lighten(0.6)
            .toString()
      : "tranparent"};

  transition: border-right 0.2s, background 0.5s;
  ${(props) => !props.isTabletOrMobile && desktopHovers}
  div {
    transition: transform 0.4s;
    transform: ${({ active }) => (active ? "scale(1.1)" : "scale(1)")};
    opacity: ${({ active, ...rest }) => (active ? 1 : 0.7)};
    filter: ${({ active }) => (!active ? "grayscale(.5)" : "none")};
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    small {
      font-size: 11px;
      font-weight: bold;
      font-family: inherit;
      display: block;
      text-align: center;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    span.notifications {
      position: absolute;
      font-size: 8px;
      font-weight: bold;
      top: 5px;
      left: 56%;
      color: #fff;
      background: #dc143c;
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      padding: 2px;
      line-height: 13px;
      text-align: center;
    }
  }
`;
