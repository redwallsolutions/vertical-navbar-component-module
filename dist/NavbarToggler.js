import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import { NavbarTogglerStyled, NavbarTogglerContainer, NavbarTogglerIndicator } from './Style';
import { FaAngleRight } from 'react-icons/fa';
import Swipe from 'react-easy-swipe';

var NavbarToggler =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NavbarToggler, _PureComponent);

  function NavbarToggler() {
    _classCallCheck(this, NavbarToggler);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavbarToggler).apply(this, arguments));
  }

  _createClass(NavbarToggler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSwipeLeft = _this$props.onSwipeLeft,
          onSwipeRight = _this$props.onSwipeRight,
          onClick = _this$props.onClick,
          currentMode = _this$props.currentMode;
      return React.createElement(Swipe, {
        onSwipeRight: onSwipeRight,
        onSwipeLeft: onSwipeLeft
      }, React.createElement(NavbarTogglerContainer, {
        onClick: onClick
      }, React.createElement(NavbarTogglerIndicator, {
        currentMode: currentMode
      }, React.createElement(FaAngleRight, null)), React.createElement(NavbarTogglerStyled, {
        currentMode: currentMode
      })));
    }
  }]);

  return NavbarToggler;
}(PureComponent);

export default NavbarToggler;