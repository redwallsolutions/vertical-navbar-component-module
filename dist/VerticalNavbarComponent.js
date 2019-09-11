import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useContext } from 'react';
import Tooltip from 'react-tooltip';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from 'styled-components';
import { VerticalNavbarItemStyled, VerticalNavbarContainer, VerticalNavbarStyled, ContentContainer, Reset, VerticalNavbarHeaderStyled, VerticalNavbarScrollWrapper } from './Style';
import useVerticalNavbarController from './useVerticalNavbarController';
import redwallLogo from './assets/img/redwall-logo-small.png';

function VerticalNavbarHeader(_ref) {
  var logo = _ref.logo,
      smallLogo = _ref.smallLogo,
      title = _ref.title,
      slogan = _ref.slogan;
  return React.createElement(VerticalNavbarHeaderStyled, null, React.createElement("img", {
    src: logo,
    alt: "Logo do sistema"
  }));
}

function VerticalNavbarItem(_ref2) {
  var appearance = _ref2.appearance,
      item = _ref2.item,
      onClick = _ref2.onClick,
      isActive = _ref2.isActive,
      isSmall = _ref2.isSmall,
      amountOfItems = _ref2.amountOfItems;
  return React.createElement(VerticalNavbarItemStyled, {
    appearance: appearance,
    onClick: onClick,
    isActive: isActive,
    isSmall: isSmall,
    "data-tip": item.name,
    amountOfItems: amountOfItems
  }, React.createElement("i", null, item.icon), isSmall && React.createElement("p", null, item.name));
}

function VerticalNavbarComponent(_ref3) {
  var _ref3$items = _ref3.items,
      items = _ref3$items === void 0 ? [] : _ref3$items,
      _ref3$logo = _ref3.logo,
      logo = _ref3$logo === void 0 ? redwallLogo : _ref3$logo,
      _ref3$appearance = _ref3.appearance,
      appearance = _ref3$appearance === void 0 ? 'default' : _ref3$appearance,
      children = _ref3.children;
  var controller = useVerticalNavbarController();

  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      activeItem = _useState2[0],
      setActiveItem = _useState2[1];

  useEffect(function () {
    controller.setActiveItem = setActiveItem;
  }, [controller]);
  var isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)'
  });
  var theme = useContext(ThemeContext);

  function onClickItem(_ref4) {
    var item = _ref4.item,
        index = _ref4.index;
    return function () {
      setActiveItem(index + 1);

      if (item.handler) {
        item.handler();
      }
    };
  }

  return React.createElement(VerticalNavbarContainer, {
    className: "vertical-navbar-component-module"
  }, React.createElement(Reset, null), React.createElement(VerticalNavbarScrollWrapper, {
    isSmall: isTabletOrMobile
  }, React.createElement(VerticalNavbarStyled, {
    appearance: appearance,
    isSmall: isTabletOrMobile,
    amountOfItems: items.length
  }, !isTabletOrMobile && React.createElement(VerticalNavbarHeader, {
    logo: logo
  }), items.map(function (item, index) {
    return React.createElement(VerticalNavbarItem, {
      key: index,
      id: "item-".concat(index),
      item: item,
      isActive: activeItem === index + 1,
      onClick: onClickItem({
        item: item,
        index: index
      }),
      appearance: appearance,
      isSmall: isTabletOrMobile,
      amountOfItems: items.length
    });
  }))), !isTabletOrMobile && React.createElement(Tooltip, {
    place: "right",
    effect: "solid",
    type: theme.mode === 'light' ? 'dark' : 'light',
    className: "vertical-navbar-tooltip"
  }), React.createElement(ContentContainer, {
    appearance: appearance,
    isSmall: isTabletOrMobile
  }, children));
}

export default VerticalNavbarComponent;