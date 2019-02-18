import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { DefaultFont } from './Style';
import VerticalNavbarComponent from './VerticalNavbarComponent';

var VerticalNavbar =
/*#__PURE__*/
function (_Component) {
  _inherits(VerticalNavbar, _Component);

  function VerticalNavbar() {
    _classCallCheck(this, VerticalNavbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(VerticalNavbar).apply(this, arguments));
  }

  _createClass(VerticalNavbar, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(DefaultFont, null), React.createElement(VerticalNavbarComponent, this.props));
    }
  }]);

  return VerticalNavbar;
}(Component);

export default VerticalNavbar;